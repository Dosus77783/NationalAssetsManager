
export default function NationStats( { data } ){

    let totalIncome = 0;
    let totalSpending = 0
    let posOrNeg = "";
    if(data){
        for(let department of Object.keys(data.spending)){
            totalSpending += data.spending[department];
        }
        totalIncome = data.treasury.taxRevenue.total - totalSpending;
        posOrNeg = totalIncome > 0 ? "+":"-";
    }
    
    return(
        <>
            <div className="border border-dark border-2" >
                <h2>Nation Stats</h2>
                <div>
                    { data &&
                    <>
                        <div>
                            <h3>{data.countryName}</h3>
                            <ul>
                                <li>Government: {data.government}</li>
                                <li>Classification: {data.difficulty}</li>
                                <li>Population: {data.population.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Daily Births: {data.birthRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Daily Deaths: {data.deathRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Total Corporations: {data.industries.totalLargeCorp}</li>
                                <li>Total Small Businesses: {data.industries.totalSmallBusiness.toLocaleString()}</li>
                                <li>Treasury: {data.treasury.current.toLocaleString()}</li>
                                <li>Tax Revenue: {data.treasury.taxRevenue.total.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</li>
                                <li>Total Spending: {totalSpending.toLocaleString( 'en-US', { maximumFractionDigits: 2 })}</li>
                                <li>Total Income: {posOrNeg} {totalIncome.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Tax Revenue</h3>
                            <ul>
                                <li>Income - Working Class: {data.treasury.taxRevenue.incomeTax.workingClass.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</li>
                                <li>Income - Managerial: {data.treasury.taxRevenue.incomeTax.managerial.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Income - Public Sector: {data.treasury.taxRevenue.incomeTax.publicSector.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Income - Teaching: {data.treasury.taxRevenue.incomeTax.teaching.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Income - Medicine: {data.treasury.taxRevenue.incomeTax.medicine.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Income - High Tech: {data.treasury.taxRevenue.incomeTax.highTech.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Corporation Profits - Small Business : {data.treasury.taxRevenue.corpoTax.smallBusiness.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Corporation Profits - Largo Corp. : {data.treasury.taxRevenue.corpoTax.largeCorpos.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </li>
                                <li>Sales Tax: {data.treasury.taxRevenue.salesTax.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</li>
                                <li>Social Security Tax: {data.treasury.taxRevenue.socialSecurityTax.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</li>
                            </ul>
                            <h3>Demographics</h3>
                            <ul>
                                <li>Population: {data.population.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Male: {data.demographics.male.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Female: {data.demographics.female.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Chidlren: {data.demographics.ageRange.children.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Young: {data.demographics.ageRange.young.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Middle Aged: {data.demographics.ageRange.middleAged.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Old: {data.demographics.ageRange.old.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Grade School Students: {data.demographics.gradeSchoolStudents.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>University Students: {data.demographics.universityStudents.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </li>
                                <li>Working Age: {data.demographics.workingAge.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Employed: {data.demographics.workingReal.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>UnEmployed: {data.demographics.unemployedPop.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Disabled/Terminally Ill: {data.demographics.disabledPop.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Working Class: {data.demographics.profession.workingClass.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Managerial Class: {data.demographics.profession.managerial.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Public Sector: {data.demographics.profession.publicSector.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Teaching: {data.demographics.profession.teaching.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Medicine: {data.demographics.profession.medicine.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>High Tech & Engineering: {data.demographics.profession.highTech.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                <li>Military: {data.demographics.profession.military.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                            </ul>

                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    )
}