
function genNumRange(min = 0, max = 50){
    return Math.floor((Math.random() * (max+1 - min)) + min)
} 

console.log(genNumRange(1,150)*1000000)


const difficultyChoices = ["Developing", "Industrial", "Modern"];
const DEVELOPING = {   
    popLow:10,
    popHigh:200,
    econCapabilityLow:100,
    econCapabilityHigh:200,
    electricalDemand:280 //megaWatts per 100,000 per day
};
const INDUSTRIAL = {   
    popLow:5,
    popHigh:50,
    econCapabilityLow:50,
    econCapabilityHigh:100,
    electricalDemand:1300 //megaWatts per 100,000 per day

};
const MODERN = {   
    popLow:1,
    popHigh:150,
    econCapabilityLow:10,
    econCapabilityHigh:50,
    electricalDemand:3700 //megaWatts per 100,000 per day
};

export function countryGenerator(nat){
    let dfSet = {}; // Difficulty Setting

    if(nat.difficulty == "Random"){ nat.difficulty = difficultyChoices[genNumRange(0,2)]}

    switch(nat.difficulty){
        case "Developing":
            dfSet = DEVELOPING;
            break;
        case "Industrial": 
            dfSet = INDUSTRIAL;
            break;
        case "Modern":
            dfSet = MODERN;
            break;
        default: console.log("Something is Wrong with the difficulty")
    }

    nat.population = genNumRange(dfSet.popLow, dfSet.popHigh) * 1000000;
    
    nat.industries.electricity.demand = (nat.population/100000) * dfSet.electricalDemand;


}
