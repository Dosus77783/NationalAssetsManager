import { numberMagnitude } from "../services/util";

export default function NationStats( { data, oldData, ui } ){

    const spendingCalc = (dataSource)=>{
        let totalSpending = 0
        if(dataSource){
            for(let department of Object.keys(dataSource.spending)){
                totalSpending += dataSource.spending[department];
            }
            return totalSpending;
        }
    }

    const spendingHistory = spendingCalc(data) - spendingCalc(oldData);
    const totalIncome =  data ? data.treasury.taxRevenue.total - spendingCalc(data) : 0 ;
    
    const posOrNeg = (num)=>{
        return num > 0 ? "+":"";
    }
    const changeBG = (number)=>{
        return posOrNeg(number) === "+" ? "income-green" : "income-red"
    }
    
    const durI = "duration-[1s] ";
    const durO = "duration-[7s] "
    const positive = "text-green-500";
    const negative = "text-red-600";
    const posImg = "../src/assets/positive2.png";
    const negImg =  "../src/assets/negative2.png";
    const getNestedProp = (object, array) =>{
        return array.reduce( (accum, key)=> {
            return accum?.[key]
        }, object);
    };
    const change = (propsArray)=>{
        const newDt = getNestedProp(data, propsArray);
        const oldDt = getNestedProp(oldData, propsArray);
        return newDt - oldDt;
    }
    const changeText = (propsArray)=>{
        const retrievedData = parseInt(change(propsArray))
        if(retrievedData == 0){
            return "";
        }
        
        return retrievedData > 0 ? positive : negative;
    }
    const changeImg = (propsArray)=>{
        return change(propsArray) > 0 ? posImg : negImg
    }
    

    return(
        <>
            <svg className={` w-20 h-20 mx-auto absolute left-1/2 -translate-x-1/2 -bottom-full  transition-opacity duration-1000 animate-spin 
                ${data ? "opacity-0 pointer-events-none" : "opacity-100"}`}  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <g fill="#0080ff" > 
                    <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path> 
                    <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path> 
                </g> 
            </svg>
            <main id="" className={`col-start-2 col-span-4 p-5 transition-opacity duration-1000
                ${data ? "opacity-100" : "opacity-0"} `} >
                {data &&
                <>
                    <div id="nation-heading" className="mb-5 rounded-lg shadow-[0_1px_5px_rgba(0,0,0,0.25)]" >
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
                                    <li className="relative group">
                                        <p>Working Class:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","workingClass"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.workingClass.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.workingClass)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Working Class Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","workingClass"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","workingClass"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","workingClass"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","workingClass"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Managerial:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","managerial"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.managerial.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.managerial)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Managerial Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","managerial"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","managerial"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","managerial"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","managerial"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Public Sector:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","publicSector"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.publicSector.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.publicSector)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Public Sector Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","publicSector"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","publicSector"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","publicSector"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","publicSector"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Teaching:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","teaching"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.teaching.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.teaching)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Teaching Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","teaching"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","teaching"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","teaching"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","teaching"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Medicine:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","medicine"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.medicine.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.medicine)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Medicine Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","medicine"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","medicine"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","medicine"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","medicine"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>High Tech:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","incomeTax","highTech"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.incomeTax.highTech.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.incomeTax.highTech)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    High Tech Income Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","incomeTax","highTech"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","incomeTax","highTech"] ) )} `}>
                                                        { parseInt(change( ["treasury","taxRevenue","incomeTax","highTech"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","incomeTax","highTech"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                </ul>
                            </article>
                            <hr className="my-2 mx-3 text-neutral-300"/>
                            <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                                <li className="relative group">
                                    <p>Sales Tax:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","salesTax"]) : durO + "text-inherit"}`} >
                                        ${data.treasury.taxRevenue.salesTax.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.salesTax)}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Sales Tax Revenue Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["treasury","taxRevenue","salesTax"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","salesTax"] ) )} `}>
                                                    { parseInt(change( ["treasury","taxRevenue","salesTax"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","salesTax"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Small Business<br/> Profits:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","corpoTax","smallBusiness"]) : durO + "text-inherit"}`} >
                                        ${data.treasury.taxRevenue.corpoTax.smallBusiness.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.corpoTax.smallBusiness)}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Small Business Tax Revenue Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["treasury","taxRevenue","corpoTax","smallBusiness"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","corpoTax","smallBusiness"] ) )} `}>
                                                    { parseInt(change( ["treasury","taxRevenue","corpoTax","smallBusiness"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","corpoTax","smallBusiness"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Largo Corp. <br/>Profits:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","corpoTax","largeCorpos"]) : durO + "text-inherit"}`} >
                                        ${data.treasury.taxRevenue.corpoTax.largeCorpos.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.corpoTax.largeCorpos)}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Large Corporation Tax Revenue Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["treasury","taxRevenue","corpoTax","largeCorpos"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","corpoTax","largeCorpos"] ) )} `}>
                                                    { parseInt(change( ["treasury","taxRevenue","corpoTax","largeCorpos"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","corpoTax","largeCorpos"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Social <br/>Security Tax:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","socialSecurityTax"]) : durO + "text-inherit"}`} >
                                        ${data.treasury.taxRevenue.socialSecurityTax.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.socialSecurityTax)}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Social Security Tax Revenue Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["treasury","taxRevenue","socialSecurityTax"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","socialSecurityTax"] ) )} `}>
                                                    { parseInt(change( ["treasury","taxRevenue","socialSecurityTax"] )).toLocaleString() } {numberMagnitude(change( ["treasury","taxRevenue","socialSecurityTax"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
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
                                <li className="relative group">
                                    <p>Population:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["population"]) : durO + "text-inherit"}`} >
                                        {data.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Daily Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["population"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["population"] ) )} `}>
                                                    { parseInt( change(["population"]) ).toLocaleString() }
                                                </span>
                                            </p>
                                        </div>
                                    } 
                                </li>
                                <li className="relative group">
                                    <p>Daily Births:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["birthRate", "daily"]) : durO + "text-inherit"}`} >
                                        {data.birthRate.daily.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Daily Birth Rate Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["birthRate", "daily"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["birthRate", "daily"] ) )} `}>
                                                    { parseInt( change(["birthRate", "daily"]) ).toLocaleString() }
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Daily Deaths:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["deathRate", "daily"]) : durO + "text-inherit"}`} >
                                        {data.deathRate.daily.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Daily Death Rate Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["deathRate", "daily"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["deathRate", "daily"] ) )} `}>
                                                    { parseInt( change(["deathRate", "daily"]) ).toLocaleString() }
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li>
                                    <p>Total Corporations:</p>
                                    <p>{data.industries.totalLargeCorp}</p>
                                </li>
                                <li>
                                    <p>Total Small <br/>Businesses:</p>
                                    <p>{data.industries.totalSmallBusiness.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                                </li>
                            </ul>
                            <hr className="my-2 mx-3 text-neutral-300"/>
                            <article className="m-3 p-2 rounded-sm sub-cards">
                                <span className="font-bold text">Government Finances</span>
                                <ul className="px-0.5 text-sm [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                                    <li>
                                        <p>Treasury:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","current"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.current.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.current)}
                                        </p>
                                    </li>
                                    <li className="relative group">
                                        <p>Tax Revenue:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["treasury","taxRevenue","total"]) : durO + "text-inherit"}`} >
                                            ${data.treasury.taxRevenue.total.toLocaleString('en-US', { maximumFractionDigits: 0 })} {numberMagnitude(data.treasury.taxRevenue.total)}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Daily Revenue Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["treasury","taxRevenue","total"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["treasury","taxRevenue","total"] ) )} `}>
                                                        { parseInt(change(["treasury","taxRevenue","total"])).toLocaleString() } {numberMagnitude(change(["treasury","taxRevenue","total"]))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Total Spending:</p>
                                        <p>
                                            ${ parseInt(spendingCalc(data)).toLocaleString() } {numberMagnitude( spendingCalc(data) )}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Daily Spending Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={ spendingHistory > 0 ? posImg : negImg }
                                                    />
                                                    <span className={`change-badge ${changeBG( spendingHistory )} `}>
                                                        { parseInt( spendingHistory ).toLocaleString() } {numberMagnitude( spendingHistory )}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li>
                                        <p>Total Income:</p>
                                        <p>
                                            <span className={"change-badge " +  changeBG(totalIncome) }>
                                                {posOrNeg(totalIncome)} ${totalIncome.toLocaleString('en-US', { maximumFractionDigits: 0 })} { numberMagnitude(totalIncome) }
                                            </span>
                                        </p>
                                    </li>
                                </ul>
                            </article>
                        </section>
                        <section className="lg:col-start-3 lg:row-span-10 md:col-span-2 md:row-span-3 statscard">
                            <h4 className="p-2 ps-5 text-lg background-extra-fill font-bold flex items-center border-b-1 border-neutral-300 rounded-t-xl ">
                                <svg className="h-6 government-icons pe-2" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 448 448"  fill="#000000">
                                    <path d="m 416,176 a 80,80 0 0 1 -80,80 80,80 0 0 1 -80,-80 80,80 0 0 1 80,-80 80,80 0 0 1 80,80 z M 192,80 A 80,80 0 0 1 112,160 80,80 0 0 1 32,80 80,80 0 0 1 112,0 80,80 0 0 1 192,80 Z M 0,384 l 192,0 0,-128 32,0 0,-64 -64,0 -48,48 -48,-48 -64,0 z M 448,275.69237 448,448 l -224,0 0,-160 64,0 48,48 48,-48 64,0 z" />
                                </svg>
                                Demographics
                            </h4>
                            <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all">
                                <li className="relative group">
                                    <p>Population:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["population"]) : durO + "text-inherit"}`} >
                                        {data.population.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["population"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["population"] ) )} `}>
                                                    { parseInt(change( ["population"] )).toLocaleString() } {numberMagnitude(change( ["population"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Male:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","male"]) : durO + "text-inherit"}`} >
                                        {data.demographics.male.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Male Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","male"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","male"] ) )} `}>
                                                    { parseInt(change( ["demographics","male"] )).toLocaleString() } {numberMagnitude(change( ["demographics","male"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Female:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","female"]) : durO + "text-inherit"}`} >
                                        {data.demographics.female.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Female Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","female"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","female"] ) )} `}>
                                                    { parseInt(change( ["demographics","female"] )).toLocaleString() } {numberMagnitude(change( ["demographics","female"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Chidlren:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","ageRange","children"]) : durO + "text-inherit"}`} >
                                        {data.demographics.ageRange.children.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Child Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","ageRange","children"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","ageRange","children"] ) )} `}>
                                                    { parseInt(change( ["demographics","ageRange","children"] )).toLocaleString() } {numberMagnitude(change( ["demographics","ageRange","children"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Young:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","ageRange","young"]) : durO + "text-inherit"}`} >
                                        {data.demographics.ageRange.young.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Young Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","ageRange","young"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","ageRange","young"] ) )} `}>
                                                    { parseInt(change( ["demographics","ageRange","young"] )).toLocaleString() } {numberMagnitude(change( ["demographics","ageRange","young"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Middle Aged:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","ageRange","middleAged"]) : durO + "text-inherit"}`} >
                                        {data.demographics.ageRange.middleAged.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Middle Aged Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","ageRange","middleAged"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","ageRange","middleAged"] ) )} `}>
                                                    { parseInt(change( ["demographics","ageRange","middleAged"] )).toLocaleString() } {numberMagnitude(change( ["demographics","ageRange","middleAged"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Old:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","ageRange","old"]) : durO + "text-inherit"}`} >
                                        {data.demographics.ageRange.old.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Old Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","ageRange","old"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","ageRange","old"] ) )} `}>
                                                    { parseInt(change( ["demographics","ageRange","old"] )).toLocaleString() } {numberMagnitude(change( ["demographics","ageRange","old"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                            </ul>
                            <hr className="my-2 mx-3 text-neutral-300"/>
                            <ul className="px-3 py-2 [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all">
                                <li className="relative group">
                                    <p>Grade School Students:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","gradeSchoolStudents"]) : durO + "text-inherit"}`} >
                                        {data.demographics.gradeSchoolStudents.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Grade School Student Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","gradeSchoolStudents"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","gradeSchoolStudents"] ) )} `}>
                                                    { parseInt(change( ["demographics","gradeSchoolStudents"] )).toLocaleString() } {numberMagnitude(change( ["demographics","gradeSchoolStudents"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>University Students:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","universityStudents"]) : durO + "text-inherit"}`} >
                                        {data.demographics.universityStudents.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                University Student Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","universityStudents"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","universityStudents"] ) )} `}>
                                                    { parseInt(change( ["demographics","universityStudents"] )).toLocaleString() } {numberMagnitude(change( ["demographics","universityStudents"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Working Age:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","workingAge"]) : durO + "text-inherit"}`} >
                                        {data.demographics.workingAge.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Working Age Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","workingAge"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","workingAge"] ) )} `}>
                                                    { parseInt(change( ["demographics","workingAge"] )).toLocaleString() } {numberMagnitude(change( ["demographics","workingAge"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Employed:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","workingReal"]) : durO + "text-inherit"}`} >
                                        {data.demographics.workingReal.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Employed Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","workingReal"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","workingReal"] ) )} `}>
                                                    { parseInt(change( ["demographics","workingReal"] )).toLocaleString() } {numberMagnitude(change( ["demographics","workingReal"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>UnEmployed:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","unemployedPop"]) : durO + "text-inherit"}`} >
                                        {data.demographics.unemployedPop.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                UnEmployed Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","unemployedPop"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","unemployedPop"] ) )} `}>
                                                    { parseInt(change( ["demographics","unemployedPop"] )).toLocaleString() } {numberMagnitude(change( ["demographics","unemployedPop"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                                <li className="relative group">
                                    <p>Disabled/Terminally Ill:</p>
                                    <p className={`transition-colors ${ui ? durI + changeText(["demographics","disabledPop"]) : durO + "text-inherit"}`} >
                                        {data.demographics.disabledPop.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                    </p>
                                    {oldData &&
                                        <div className="country-tooltip statscard">
                                            <p>
                                                Disabled Population Change: 
                                                <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                    src={changeImg( ["demographics","disabledPop"] )}
                                                />
                                                <span className={`change-badge ${changeBG( change( ["demographics","disabledPop"] ) )} `}>
                                                    { parseInt(change( ["demographics","disabledPop"] )).toLocaleString() } {numberMagnitude(change( ["demographics","disabledPop"] ))}
                                                </span>
                                            </p>
                                        </div>
                                    }
                                </li>
                            </ul>
                            <hr className="my-2 mx-3 text-neutral-300"/>
                            <article className="m-3 p-2 rounded-sm sub-cards">
                                <span className="font-bold text">Professions:</span>
                                <ul className="px-3 py-2 text-sm [&>li]:flex [&>li]:justify-between [&>li]:flex-wrap [&>li]:items-end [&>li:not(:last-child)]:border-b-1 [&>li]:border-slate-300/40 [&>li>p:nth-of-type(2)]:font-bold [&>li>p]:break-all ">
                                    <li className="relative group">
                                        <p>Working Class:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","workingClass"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.workingClass.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Working Class Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","workingClass"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","workingClass"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","workingClass"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","workingClass"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Managerial Class:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","managerial"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.managerial.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Managerial Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","managerial"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","managerial"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","managerial"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","managerial"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Public Sector:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","publicSector"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.publicSector.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Public Sector Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","publicSector"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","publicSector"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","publicSector"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","publicSector"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Teaching:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","teaching"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.teaching.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Teaching Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","teaching"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","teaching"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","teaching"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","teaching"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Medicine:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","medicine"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.medicine.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Medical Profession Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","medicine"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","medicine"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","medicine"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","medicine"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>High Tech & Engineering:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","highTech"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.highTech.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    High Tech Profession Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","highTech"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","highTech"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","highTech"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","highTech"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
                                    </li>
                                    <li className="relative group">
                                        <p>Military:</p>
                                        <p className={`transition-colors ${ui ? durI + changeText(["demographics","profession","military"]) : durO + "text-inherit"}`} >
                                            {data.demographics.profession.military.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                                        </p>
                                        {oldData &&
                                            <div className="country-tooltip statscard">
                                                <p>
                                                    Military Population Change: 
                                                    <img className="mx-1 size-3.5 inline animate-bounce" alt="arrow"  
                                                        src={changeImg( ["demographics","profession","military"] )}
                                                    />
                                                    <span className={`change-badge ${changeBG( change( ["demographics","profession","military"] ) )} `}>
                                                        { parseInt(change( ["demographics","profession","military"] )).toLocaleString() } {numberMagnitude(change( ["demographics","profession","military"] ))}
                                                    </span>
                                                </p>
                                            </div>
                                        }
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