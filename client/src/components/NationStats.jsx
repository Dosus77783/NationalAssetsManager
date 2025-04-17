
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
            <main id="nationstatsmain" className="col-start-2 col-span-4 rounded-sm p-5" >
                <h2 className="text-xl font-bold text-center">
                    <span className="px-5 border-y background-extra-fill">Nation Status</span>
                </h2>
                { data &&
                <>
                    <h3 className="text-4xl text-center font-bold my-2">{data.countryName}</h3>
                    <hr/>
                    <div className="text-start grid gap-5 my-5">
                        <section className="row-start-1 grid grid-cols-2 statscard px-5 py-3">
                            <article className="grid grid-cols-2 px-10">
                                <h4 className="text-center col-span-full"><span className="px-3 border-y background-extra-fill font-bold">General</span></h4>
                                <ul className="col-start-1">
                                    <li className="">Government:</li>
                                    <li className="" >Classification:</li>
                                    <li className="" >Population:</li>
                                    <li className="" >Daily Births:</li>
                                    <li className="" >Daily Deaths:</li>
                                    <li className="" >Total Corporations:</li>
                                    <li className="" >Total Small Businesses:</li>
                                    <li className="" >Treasury:</li>
                                    <li className="" >Tax Revenue:</li>
                                    <li className="" >Total Spending:</li>
                                    <li className="" >Total Income:</li>
                                </ul>
                                <ul className="col-start-2 text-end">
                                    <li className="font-bold">{data.government}</li>
                                    <li className="font-bold">{data.difficulty}</li>
                                    <li className="font-bold">{data.population.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                    <li className="font-bold">{data.birthRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                    <li className="font-bold">{data.deathRate.daily.toLocaleString( 'en-US', { maximumFractionDigits: 0 }) }</li>
                                    <li className="font-bold">{data.industries.totalLargeCorp}</li>
                                    <li className="font-bold">{data.industries.totalSmallBusiness.toLocaleString()}</li>
                                    <li className="font-bold">{data.treasury.current.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.total.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</li>
                                    <li className="font-bold">{totalSpending.toLocaleString( 'en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">
                                        <span className={ "rounded px-2 py-0.5 " + (posOrNeg == "+" ? "income-green" : "income-red")}>{posOrNeg} {totalIncome.toLocaleString( 'en-US', { maximumFractionDigits: 2 }) }</span>
                                    </li>
                                </ul>
                            </article>
                            <article className="grid grid-cols-2 px-10 ">
                                <h4 className="col-span-full text-center"><span className="px-3 border-y background-extra-fill font-bold">Tax Revenue</span></h4>
                                <ul className="col-start-1">
                                    <li >Income - Working Class:</li>
                                    <li >Income - Managerial:</li>
                                    <li >Income - Public Sector:</li>
                                    <li >Income - Teaching:</li>
                                    <li >Income - Medicine:</li>
                                    <li >Income - High Tech:</li>
                                    <li >Small Business Profits:</li>
                                    <li >Largo Corp. Profits:</li>
                                    <li >Sales Tax:</li>
                                    <li >Social Security Tax:</li>
                                </ul>
                                <ul className="col-start-2 text-end">
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.workingClass.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.managerial.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.publicSector.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.teaching.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.medicine.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.incomeTax.highTech.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.corpoTax.smallBusiness.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.corpoTax.largeCorpos.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.salesTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                    <li className="font-bold">{data.treasury.taxRevenue.socialSecurityTax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</li>
                                </ul>
                            </article>
                        </section>
                        <section className="row-start-2 grid grid-cols-2 statscard">
                            <ul className="">
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
                        </section>
                    </div>
                </>
                }
            </main>
        </>
    )
}