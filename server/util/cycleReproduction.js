import cron from "node-cron"
import Country from "../models/country.model.js";

const TIMEFRAME = '* * * * *'; // Using Cron job timeframe strings. Currently calls job every minute.

export default function createJobCycle(cronJobData){

    cron.schedule( TIMEFRAME, async () => await cycleLogic(cronJobData), { name: cronJobData.countryName, scheduled: true } );
}

export async function restartJobs(){

    try{
        const RES = await Country.find( {}, { _id:1, countryName:1 } );
        console.log(RES);
        if(RES.length === 0){ return; }
        
        RES.forEach( elem => cron.schedule(TIMEFRAME, async () => await cycleLogic(elem), { name: elem.countryName, scheduled: true } ) );
        
    }
    catch(error){
        console.log("Restart Jobs Function----", error)
    }
}

async function cycleLogic(cronJobData){
    console.log("Job Report!", "Name:", cronJobData.countryName, cronJobData._id, " -- TimeStamp:", new Date());

    try{
        // CONSTANTS FOR LOGIC
        const NAT = await Country.findById( cronJobData._id );
        const popDiff = NAT.birthRate.daily - NAT.deathRate.daily;
        const popDiffMaleFemale = popDiff/2 |0;
        const gradeSchoolPercent = NAT.demographics.gradeSchoolStudents/NAT.demographics.ageRange.children;
        const universityPercent = NAT.demographics.universityStudents/NAT.demographics.ageRange.young;
        const unemployedPercent = NAT.demographics.unemployedPop/NAT.demographics.workingAge;
        const disabledPercent = NAT.demographics.disabledPop/NAT.demographics.workingAge;
        const workingClassPercent = NAT.demographics.profession.workingClass/NAT.demographics.workingReal;
        const managerialPercent = NAT.demographics.profession.managerial/NAT.demographics.workingReal;
        const publicSectorPercent = NAT.demographics.profession.publicSector/NAT.demographics.workingReal;
        const teachingPercent = NAT.demographics.profession.teaching/NAT.demographics.workingReal;
        const medicinePercent = NAT.demographics.profession.medicine/NAT.demographics.workingReal;
        const highTechPercent = NAT.demographics.profession.highTech/NAT.demographics.workingReal;
        const neutralHealthCare = (NAT.population * NAT.setProps.healthcarePerCapita)/365 |0; 
    
        NAT.population += popDiff;
    
        // DEMOGRAPHICS UPDATE
        NAT.demographics.male += popDiffMaleFemale;
        NAT.demographics.female += popDiff - popDiffMaleFemale;
        NAT.demographics.ageRange.children += NAT.birthRate.daily;
        NAT.demographics.ageRange.children -= (NAT.deathRate.daily * 0.1)|0;
        NAT.demographics.ageRange.young -= (NAT.deathRate.daily * 0.2)|0;
        NAT.demographics.ageRange.middleAged -= (NAT.deathRate.daily * 0.2)|0;
        NAT.demographics.ageRange.old -= (NAT.deathRate.daily * 0.5)|0;
    
        NAT.demographics.gradeSchoolStudents = NAT.demographics.ageRange.children * gradeSchoolPercent |0;
        NAT.demographics.universityStudents = NAT.demographics.ageRange.young * universityPercent |0;
        NAT.demographics.workingAge = NAT.demographics.ageRange.young + NAT.demographics.ageRange.middleAged;
        NAT.demographics.unemployedPop = NAT.demographics.workingAge * unemployedPercent |0;
        NAT.demographics.disabledPop = NAT.demographics.workingAge * disabledPercent |0;
        NAT.demographics.workingReal = NAT.demographics.workingAge - NAT.demographics.unemployedPop - NAT.demographics.disabledPop;
    
        NAT.demographics.profession.workingClass = NAT.demographics.workingReal * workingClassPercent |0;
        NAT.demographics.profession.managerial = NAT.demographics.workingReal * managerialPercent |0;
        NAT.demographics.profession.publicSector = NAT.demographics.workingReal * publicSectorPercent |0;
        NAT.demographics.profession.teaching = NAT.demographics.workingReal * teachingPercent |0;
        NAT.demographics.profession.medicine = NAT.demographics.workingReal * medicinePercent |0;
        NAT.demographics.profession.highTech = NAT.demographics.workingReal * highTechPercent |0;
        NAT.demographics.profession.military = 
            NAT.demographics.workingReal - NAT.demographics.profession.workingClass - 
            NAT.demographics.profession.managerial - NAT.demographics.profession.publicSector - 
            NAT.demographics.profession.teaching - NAT.demographics.profession.medicine - NAT.demographics.profession.highTech;
    
        // BIRTH RATE & DEATH RATE UPDATE
    
        NAT.birthRate.spendingDiff +=  parseFloat( (((NAT.spending.healthcare - neutralHealthCare)/neutralHealthCare) * 0.0001).toFixed(7) ) ;
        NAT.birthRate.daily += parseFloat((NAT.birthRate.daily * NAT.birthRate.spendingDiff).toFixed(4));
        NAT.birthRate.totalYearly = NAT.birthRate.daily * 365;
        NAT.birthRate.cbr = (NAT.birthRate.daily * 365000) / NAT.population;
    
        NAT.deathRate.spendingDiff -= parseFloat( (((NAT.spending.healthcare - neutralHealthCare)/neutralHealthCare) * 0.00001).toFixed(7) ) ;
        NAT.deathRate.daily += parseFloat( (NAT.deathRate.daily * NAT.deathRate.spendingDiff).toFixed(4) );
        NAT.deathRate.totalYearly = NAT.deathRate.daily * 365;
        NAT.deathRate.cbr = (NAT.deathRate.daily * 365000) / NAT.population;
    
        // TAXES AND REVENUE
    
        NAT.treasury.taxRevenue.socialSecurityTax = 0;
        NAT.treasury.taxRevenue.total = 0;
    
        for(let prof of Object.keys(NAT.treasury.taxRevenue.incomeTax)){
            let profSalary = ((NAT.treasury.countryProfits.incomeSalaryAvg[prof] * 1000)  * NAT.demographics.profession[prof]) 
    
            NAT.treasury.taxRevenue.incomeTax[prof] = profSalary * NAT.taxes.incomeTax;
            NAT.treasury.taxRevenue.socialSecurityTax += profSalary * NAT.taxes.socialSecurityTax
    
            NAT.treasury.taxRevenue.total += NAT.treasury.taxRevenue.incomeTax[prof]
        }
    
        NAT.treasury.taxRevenue.salesTax = NAT.treasury.countryProfits.consumerGoodsConsumption * NAT.taxes.salesTax;
    
        NAT.treasury.taxRevenue.total += 
            NAT.treasury.taxRevenue.corpoTax.smallBusiness + NAT.treasury.taxRevenue.corpoTax.largeCorpos + 
            NAT.treasury.taxRevenue.salesTax + NAT.treasury.taxRevenue.socialSecurityTax;
    
        for(let spen of Object.keys(NAT.spending)){
            NAT.spending[spen] =  NAT.treasury.taxRevenue.total * NAT.setProps.spendingStandards[spen];
        }
    
        return await Country.findByIdAndUpdate( NAT._id, NAT, { runValidators: false });

    }
    catch(error){
        console.log("Cycle Logic Function----", cronJobData.countryName, error)
    }
}
