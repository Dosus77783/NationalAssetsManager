
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
            <main id="" className="col-start-2 col-span-4 rounded-sm p-5 " >
            { data &&
            <>
                <div id="nation-heading" className="mb-5 rounded-lg shadow-[0_1px_5px_rgba(0,0,0,0.25)]">
                    <h2 className="p-1 text-2xl text-center font-bold border-b-1 border-neutral-300 background-extra-fill rounded-t-lg">
                        Nation Status
                    </h2>
                    <h3 className="p-2 text-4xl font-bold text-center flex items-center justify-center">
                        <svg className="government-icons h-12" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-4.62 -4.62 23.24 23.24" id="svg2" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" strokeWidth="0.00014">
                            <path d="M 7,0 C 6.75,0.0032 6.5,0.1644239 6.5,0.5 l 0,4.03125 C 3.906144,4.6951647 3,6.060613 3,7 l 8,0 C 11,6.060613 10.093856,4.6951647 7.5,4.53125 L 7.5,0.5 C 7.5,0.1516409 7.25,-0.0031957 7,0 z M 8,0 8,3 12,3 10,1.5 12,0 8,0 z m -7,8 0,1 1,0 0,4 -1,0 -1,1 14,0 -1,-1 -1,0 0,-4 1,0 0,-1 -12,0 z m 3,1 1,0 0,4 -1,0 0,-4 z m 2,0 2,0 0,4 -2,0 0,-4 z m 3,0 1,0 0,4 -1,0 0,-4 z" ></path> 
                        </svg>
                        {data.countryName}
                    </h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-10 md:grid-rows-5 gap-5 mt-5">
                    <section className="lg:col-start-1 lg:row-span-7 md:row-start-1 md:row-span-2 md:col-start-2 statscard">
                        <h4 className="p-2 ps-5 text-lg background-extra-fill font-bold flex items-center border-b-1 border-neutral-300 rounded-t-xl">
                            <svg className="h-6 government-icons pe-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" >
                                <polygon points="40,310 40,0 0,0 0,350 350,350 350,310 "></polygon> 
                                <polygon points="218.623,195.004 271.438,119.425 253.165,106.656 322.534,74.229 315.939,150.522 297.668,137.755 227.994,237.459 153.407,194.118 97.979,266.002 72.639,246.461 145.21,152.345 "></polygon> 
                            </svg>
                            Tax Revenue
                        </h4>
                        <article className="m-3 p-2 rounded-sm sub-cards">
                            <span className="font-bold text">Professions Income:</span>
                            <ul className="px-3 py-2 text-sm [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                                <li>
                                    <p>Working Class:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.workingClass.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Managerial:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.managerial.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Public Sector:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.publicSector.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Teaching:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.teaching.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Medicine:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.medicine.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>High Tech:</p>
                                    <p>${data.treasury.taxRevenue.incomeTax.highTech.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                            </ul>
                        </article>
                        <hr className="my-2 mx-3 text-neutral-300"/>
                        <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                            <li>
                                <p>Small Business<br/> Profits:</p>
                                <p>${data.treasury.taxRevenue.corpoTax.smallBusiness.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Largo Corp. <br/>Profits:</p>
                                <p>${data.treasury.taxRevenue.corpoTax.largeCorpos.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Sales Tax:</p>
                                <p>${data.treasury.taxRevenue.salesTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Social Security <br/>Tax:</p>
                                <p>${data.treasury.taxRevenue.socialSecurityTax.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                        </ul>
                    </section>
                    <section className="lg:col-start-2 lg:row-span-6 md:row-start-1 md:row-span-2 md:col-start-1 row-start-1 statscard">
                        <h4 className="p-2 ps-5 text-lg background-extra-fill font-bold flex items-center border-b-1 border-neutral-300 rounded-t-xl">
                            <svg className="h-8 government-icons pe-1" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.375 26.625v-17.656c0.719-0.438 1.094-1.125 1.094-1.938 0-1.219-1-2.25-2.219-2.25-1.25 0-2.25 1.031-2.25 2.25 0 0.813 0.438 1.5 1.156 1.938v17.656c0 0.313 0.219 0.563 0.5 0.563h1.156c0.313 0 0.563-0.25 0.563-0.563zM4.469 9.969v10.125c0 0.594 0.313 0.844 0.688 0.563 0.719-0.531 1.344-0.938 1.906-1.219 1.156-0.531 1.969-0.781 2.719-0.813 0.938 0 1.656 0.188 2.375 0.531 0.688 0.313 1.313 0.813 2.031 1.281 0.406 0.25 0.906 0.406 1.469 0.438 0.938 0.063 2.25-0.156 3.781-1.406 0.344-0.281 0.625-1 0.625-1.531v-10.125c0-0.594-0.25-0.813-0.625-0.531-0.781 0.594-1.5 1-2.125 1.188-1.281 0.344-2.281 0.281-3.125-0.219-0.719-0.469-1.344-0.969-2.031-1.281-0.719-0.344-1.438-0.531-2.375-0.531-0.344 0-0.781 0.094-1.25 0.219-0.844 0.25-1.938 0.781-3.375 1.781-0.375 0.281-0.688 0.969-0.688 1.531z"></path>
                            </svg>
                            General
                        </h4>
                        <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all">
                            <li>
                                <p>Government:</p>
                                <p>{data.government}</p>
                            </li>
                            <li>
                                <p>Classification:</p>
                                <p>{data.difficulty}</p>
                            </li>
                            <li>
                                <p>Population:</p>
                                <p>{data.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Daily Births:</p>
                                <p>{data.birthRate.daily.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Daily Deaths:</p>
                                <p>{data.deathRate.daily.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Total Corporations:</p>
                                <p>{data.industries.totalLargeCorp}</p>
                            </li>
                            <li>
                                <p>Total Small <br/>Businesses:</p>
                                <p>{data.industries.totalSmallBusiness.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Treasury:</p>
                                <p>${data.treasury.current.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Tax Revenue:</p>
                                <p>${data.treasury.taxRevenue.total.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Total Spending:</p>
                                <p>${totalSpending.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Total Income:</p>
                                <p>
                                    <span className={"rounded px-1 align-middle text-xs font-normal " + (posOrNeg === "+" ? "income-green" : "income-red")}>
                                        {posOrNeg} ${totalIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </section>
                    <section className="lg:col-start-3 lg:row-span-10 md:col-span-2 md:row-span-3 statscard">
                        <h4 className="p-2 ps-5 text-lg background-extra-fill font-bold flex items-center border-b-1 border-neutral-300 rounded-t-xl ">
                            <svg className="h-6 government-icons pe-1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 448 448"  fill="#000000">
                                <path d="m 416,176 a 80,80 0 0 1 -80,80 80,80 0 0 1 -80,-80 80,80 0 0 1 80,-80 80,80 0 0 1 80,80 z M 192,80 A 80,80 0 0 1 112,160 80,80 0 0 1 32,80 80,80 0 0 1 112,0 80,80 0 0 1 192,80 Z M 0,384 l 192,0 0,-128 32,0 0,-64 -64,0 -48,48 -48,-48 -64,0 z M 448,275.69237 448,448 l -224,0 0,-160 64,0 48,48 48,-48 64,0 z" />
                            </svg>
                            Demographics
                        </h4>
                        <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all">
                            <li>
                                <p>Population:</p>
                                <p>{data.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Male:</p>
                                <p>{data.demographics.male.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Female:</p>
                                <p>{data.demographics.female.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Chidlren:</p>
                                <p>{data.demographics.ageRange.children.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Young:</p>
                                <p>{data.demographics.ageRange.young.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Middle Aged:</p>
                                <p>{data.demographics.ageRange.middleAged.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Old:</p>
                                <p>{data.demographics.ageRange.old.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                        </ul>
                        <hr className="my-2 mx-3 text-neutral-300"/>
                        <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all">
                            <li>
                                <p>Grade School Students:</p>
                                <p>{data.demographics.gradeSchoolStudents.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>University Students:</p>
                                <p>{data.demographics.universityStudents.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Working Age:</p>
                                <p>{data.demographics.workingAge.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Employed:</p>
                                <p>{data.demographics.workingReal.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>UnEmployed:</p>
                                <p>{data.demographics.unemployedPop.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                            <li>
                                <p>Disabled/Terminally Ill:</p>
                                <p>{data.demographics.disabledPop.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </li>
                        </ul>
                        <hr className="my-2 mx-3 text-neutral-300"/>
                        <article className="m-3 p-2 rounded-sm sub-cards">
                            <span className="font-bold text">Professions:</span>
                            <ul className="px-3 py-2 text-sm [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                                <li>
                                    <p>Working Class:</p>
                                    <p>{data.demographics.profession.workingClass.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Managerial Class:</p>
                                    <p>{data.demographics.profession.managerial.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Public Sector:</p>
                                    <p>{data.demographics.profession.publicSector.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Teaching:</p>
                                    <p>{data.demographics.profession.teaching.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Medicine:</p>
                                    <p>{data.demographics.profession.medicine.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>High Tech & Engineering:</p>
                                    <p>{data.demographics.profession.highTech.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                                <li>
                                    <p>Military:</p>
                                    <p>{data.demographics.profession.military.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </>
            }
            </main>
        </>
    )
}