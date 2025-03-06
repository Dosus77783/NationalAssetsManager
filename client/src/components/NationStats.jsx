
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
                <h1>Nation Stats</h1>
                <div>
                    { data &&
                    <>
                        <ul>
                            <li>{data.countryName}</li>
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
                        <ul>

                        </ul>
                    </>
                    }
                </div>
            </div>
        </>
    )
}