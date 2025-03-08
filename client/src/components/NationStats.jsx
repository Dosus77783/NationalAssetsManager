
export default function NationStats( { data } ){

    let totalIncome = 0;
    let totalSpending = 0
    let posOrNeg = "";
    if(data){
        for(let department of Object.keys(data.spending)){
            totalSpending += data.spending[department];
        }
        totalIncome = data.treasury.taxRevenue.total - totalSpending;
        posOrNeg = totalIncome > 0 ? "+":"";
    }
    
    return(
        <>
            <div className="border border-dark border-4 rounded shadow-lg px-5 pt-1 mt-4 bg-primary bg-opacity-50 bg-gradient" >
                <h2 className="display-5 fw-bold font-monospace text-decoration-underline">Nation Stats</h2>
                { data &&
                <>
                    <h3 className="text-center fw-bold font-monospace">{data.countryName}</h3>
                    <div className="text-start">
                        <div className="row">
                            <ul className="col me-4 px-5 py-3 fs-5 bg-secondary bg-opacity-50 bg-gradient rounded">
                                <h4 className="text-decoration-underline">General</h4>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Government:</span>
                                    <span className="fw-bold">{data.government}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Classification:</span>
                                    <span className="fw-bold">{data.difficulty}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Population:</span>
                                    <span className="fw-bold">{data.population.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Daily Births:</span>
                                    <span className="fw-bold">{data.birthRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Daily Deaths:</span>
                                    <span className="fw-bold">{data.deathRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Total Corporations:</span>
                                    <span className="fw-bold">{data.industries.totalLargeCorp}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Total Small Businesses:</span>
                                    <span className="fw-bold">{data.industries.totalSmallBusiness.toLocaleString()}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Treasury:</span>
                                    <span className="fw-bold">{data.treasury.current.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Tax Revenue:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.total.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Total Spending:</span>
                                    <span className="fw-bold">{totalSpending.toLocaleString( 'en-US', { maximumFractionDigits: 2 })}</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Total Income:</span>
                                    <span className={ "badge p-2 "+(posOrNeg == "+" ? "bg-success" : "bg-danger")}>{posOrNeg} {totalIncome.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</span>
                                </li>
                            </ul>
                            <ul className="col px-5 py-3 fs-5 bg-secondary bg-opacity-50 bg-gradient rounded">
                                <h4 className="text-decoration-underline">Tax Revenue</h4>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - Working Class:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.workingClass.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - Managerial:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.managerial.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - Public Sector:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.publicSector.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - Teaching:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.teaching.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - Medicine:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.medicine.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Income - High Tech:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.incomeTax.highTech.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Small Business Profits:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.corpoTax.smallBusiness.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Largo Corp. Profits:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.corpoTax.largeCorpos.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Sales Tax:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.salesTax.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Social Security Tax:</span>
                                    <span className="fw-bold">{data.treasury.taxRevenue.socialSecurityTax.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) } </span>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <ul className="col px-5 py-3 fs-5 bg-secondary bg-opacity-50 bg-gradient rounded-start ">
                                <h4 className="text-decoration-underline">Demographics</h4>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Population:</span>
                                    <span className="fw-bold">{data.population.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Male:</span>
                                    <span className="fw-bold">{data.demographics.male.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Female:</span>
                                    <span className="fw-bold">{data.demographics.female.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Chidlren:</span>
                                    <span className="fw-bold">{data.demographics.ageRange.children.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Young:</span>
                                    <span className="fw-bold">{data.demographics.ageRange.young.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Middle Aged:</span>
                                    <span className="fw-bold">{data.demographics.ageRange.middleAged.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Old:</span>
                                    <span className="fw-bold">{data.demographics.ageRange.old.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Grade School Students:</span>
                                    <span className="fw-bold">{data.demographics.gradeSchoolStudents.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >University Students:</span>
                                    <span className="fw-bold">{data.demographics.universityStudents.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                            </ul>
                            <ul className="col px-5 py-3 fs-5 bg-secondary bg-opacity-50 bg-gradient rounded-end">
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Working Age:</span>
                                    <span className="fw-bold">{data.demographics.workingAge.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Employed:</span>
                                    <span className="fw-bold">{data.demographics.workingReal.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >UnEmployed:</span>
                                    <span className="fw-bold">{data.demographics.unemployedPop.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Disabled/Terminally Ill:</span>
                                    <span className="fw-bold">{data.demographics.disabledPop.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Working Class:</span>
                                    <span className="fw-bold">{data.demographics.profession.workingClass.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Managerial Class:</span>
                                    <span className="fw-bold">{data.demographics.profession.managerial.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Public Sector:</span>
                                    <span className="fw-bold">{data.demographics.profession.publicSector.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>                                
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Teaching:</span>
                                    <span className="fw-bold">{data.demographics.profession.teaching.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Medicine:</span>
                                    <span className="fw-bold">{data.demographics.profession.medicine.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >High Tech & Engineering:</span>
                                    <span className="fw-bold">{data.demographics.profession.highTech.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                                <li className="d-flex justify-content-between" >
                                    <span className="font-monospace" >Military:</span>
                                    <span className="fw-bold">{data.demographics.profession.military.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) } </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
                }
            </div>
        </>
    )
}