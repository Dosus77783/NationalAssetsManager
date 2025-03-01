import cron from "node-cron"
import Country from "../models/country.model.js";

const TIMEFRAME = '* * * * *'; // Using Cron job timeframe strings. Currently calls job every minute.

cron.schedule( TIMEFRAME, cycleLogic, {scheduled: true } )
// console.log(cron.getTasks().entries())


function createJobCycle(cronJobData){

    cron.schedule( TIMEFRAME, async () => cycleLogic(cronJobData), { name: cronJobData.name, scheduled: true } )
}


async function cycleLogic(cronJobData){
    console.log("Job Report!", cronJobData.name, cronJobData._id, " -- TimeStamp:", new Date().toISOString);

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

    // BIRTH RATES & DEATH RATES
    

}
