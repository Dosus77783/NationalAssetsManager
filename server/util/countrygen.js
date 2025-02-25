
function genNumRange(min = 0, max = 50){
    return Math.floor((Math.random() * (max+1 - min)) + min)
} 

console.log(genNumRange(1,150)*1000000)


const difficultyChoices = ["Developing", "Industrial", "Modern"];
const DEVELOPING = {   
    popLow:10,
    popHigh:200,
    econCapabilityLow:100,
    econCapabilityHigh:250,
    electricalDemand:280, //megaWatts per 100,000 per day
    electricalProductionModifier:0.75, // corporation amount uses genNumRange, this modifyier is multiplied to the base after genNumRange
    steelDemand:200, // tons of steel per 100,000 per day
    steelProductionModifier: 0.8, // corporation amount uses genNumRange, this modifyier is multiplied to the base after genNumRange
    plywoodDemand:40000, // Board Feet of plywood per day, per 100,000 people
    plywoodProductionModifier: 0.75, // corporation amount uses genNumRange, this modifyier is multiplied to the base after genNumRange
    concreteDemand:500, // Cubic Yards of concrete per day, per 100,000 people
    concreteProductionModifier: 0.9,
    miscBuildDemand:50, // Tons of misc building materials per day, per 100,000 people
    miscBuildProductionModifier: 0.75,
    oilDemand:1500, // Barrels of oil per day, per 100,000 people
    oilProductionModifier: 0.75,
    waterDemand:250000, // Barrels of water per day, per 100,000 people
    waterProductionModifier: 0.9,
    foodDemand: 400000, // Pounds of food per day, per 100,000 people
    foodProductionModifier: 1.15,
    processProductionModifier: 0.8, // No need for demand, because demand comes from markets production
    farmingProductionModifier: 0.9 ,// No need for demand, because demand comes from food processing production
};
const INDUSTRIAL = {   
    popLow:5,
    popHigh:150,
    econCapabilityLow:50,
    econCapabilityHigh:100,
    electricalDemand:1300, //megaWatts per 100,000 per day
    electricalProductionModifier:1.2,
    steelDemand:1000, // tons of steel per 100,000 per day
    steelProductionModifier: 2.5,
    plywoodDemand:100000, // Board Feet of plywood per day, per 100,000 people
    plywoodProductionModifier: 1.5, 
    concreteDemand:2000, // Cubic Yards of concrete per day, per 100,000 people
    concreteProductionModifier: 2,
    miscBuildDemand:200, // Tons of misc building materials per day, per 100,000 people
    miscBuildProductionModifier: 3,
    oilDemand:3000, // Barrels of oil per day, per 100,000 people
    oilProductionModifier: 1.2,
    waterDemand:500000, // Barrels of water per day, per 100,000 people
    waterProductionModifier: 2,
    foodDemand: 450000, // Pounds of food per day, per 100,000 people
    foodProductionModifier: 1.5,
    processProductionModifier: 1.2, // No need for demand, because demand comes from markets production
    farmingProductionModifier: 1.2 ,// No need for demand, because demand comes from food processing production

};
const MODERN = {   
    popLow:1,
    popHigh:100,
    econCapabilityLow:10,
    econCapabilityHigh:50,
    electricalDemand:3700, //megaWatts per 100,000 per day
    electricalProductionModifier:1.5,
    steelDemand:2500, // tons of steel per 100,000 per day
    steelProductionModifier: 5, 
    plywoodDemand:300000, // Board Feet of plywood per day, per 100,000 people
    plywoodProductionModifier: 3,
    concreteDemand:5000, // Cubic Yards of concrete per day, per 100,000 people
    concreteProductionModifier: 3,
    miscBuildDemand:500, // Tons of misc building materials per day, per 100,000 people
    miscBuildProductionModifier: 5,
    oilDemand:6100, // Barrels of oil per day, per 100,000 people
    oilProductionModifier: 1.5,
    waterDemand:700000, // Barrels of water per day, per 100,000 people
    waterProductionModifier: 3.5,
    foodDemand: 500000, // Pounds of food per day, per 100,000 people
    foodProductionModifier: 1.75,
    processProductionModifier: 1.5, // No need for demand, because demand comes from markets production
    farmingProductionModifier: 1.35,// No need for demand, because demand comes from food processing production
};

const SBDivision = 12; // The division number in which small businesses are divided among the industries. With 12, all SBs are divided evenly among all industries.
const ElecCorpProd = 72000; // MW per day a single corps production.
const ElecCorpCount = {low:1, high:10}; // Standard high and low possibility for electrical corporation count.
const SBElecProd = 3; // MW per day, 1 Small Business electrical production
const SteelCorpProd = 20000; // tons per day for a single corps production
const SteelCorpCount = {low:1, high:30}; // Standard high and low possibility for steel corporation count.
const SBSteelProd = 2; // Tons per day, 1 SB steel production 
const PlywoodCorpProd = 7000000; // Board Feet per day for a single corps production
const PlywoodCorpCount = {low:1, high:8}; // Standard high and low possibility for plywood corporation count.
const SBPlywoodProd = 850; // Board Feet per day, 1 SB plywood production.
const ConcreteCorpProd = 100000; // 20 plants where each plant produces 5,000 CY
const ConcreteCorpCount = {low:1, high:6}; // Standard high and low possibility for concrete corporation count.
const SBConcreteProd = 5; // Cubic Yards per day, 1 SB of concrete production
const MiscBuildingCorpProd = 10000; // 10 plants where each plant produces 1,000 tons
const MiscBuildingCorpCount = {low:1, high:10}; // Standard high and low possibility for misc building materials corporation count.
const SBMiscBuildProd = 0.5; // tons per day, 1 SB of concrete production
const OilCorpProd = 750000; // 3 refineries where each refinery produces 250,000 barrels of oil per day
const OilCorpCount = {low:1, high:5}; // Standard high and low possibility for oil corporation count.
const SBOilProd = 8; // barrels per day, 1 SB of oil production
const WaterCorpProd = 20000000; // 10 plants where each plant produces 2,000,000 barrels of water per day
const WaterCorpCount = {low:7, high:15}; // Standard high and low possibility for water corporation count.
const SBWaterProd = 500; // barrels per day, 1 SB of water production
const MarketCorpProd = 25000000; // 5000 stores where each store can sell 5,000 pounds of food per day
const MarketCorpCount = {low:7, high:12}; // Standard high and low possibility for market corporation count.
const SBMarketProd = 4000; // pounds per day, 1 SB that sells food
const FoodProcessCorpProd = 100000000; // 10 plants where each plant can produce 10,000,000 pounds of food per day
const FoodProcessCorpCount = {low:2, high:5}; // Standard high and low possibility for market corporation count.
const SBFoodProcessProd = 2000; // pounds per day, 1 SB of food production
const FarmingCorpProd = 75000000; // 100 farms where each farm can produce 750,000 pounds of food per day
const FarmingCorpCount = {low:1, high:5}; // Standard high and low possibility for market corporation count.
const SBFarmingProd = 6000; // pounds per day, 1 SB of farming production


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

    nat.treasury.economicCapability = genNumRange(dfSet.econCapabilityLow,dfSet.econCapabilityHigh);

    nat.industries.totalSmallBusiness = nat.population/nat.treasury.economicCapability

    nat.industries.electricity.demand = (nat.population/100000) * dfSet.electricalDemand; // electrical total demand in MW 
    nat.industries.electricity.count = genNumRange(ElecCorpCount.low, ElecCorpCount.high) * dfSet.electricalProductionModifier;
    nat.industries.elecriticty.production = (nat.industries.electricity.count * ElecCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBElecProd);

    nat.industries.steel.demand = (nat.population/100000) * dfSet.steelDemand; // steel total demand in tons
    nat.industries.steel.count = genNumRange(SteelCorpCount.low, SteelCorpCount.high) * dfSet.steelProductionModifier;
    nat.industries.steel.production = (nat.industries.steel.count * SteelCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBSteelProd);

    nat.industries.plywood.demand = (nat.population/100000) * dfSet.plywoodDemand; // plywood total demand in BF
    nat.industries.plywood.count = genNumRange(PlywoodCorpCount.low, PlywoodCorpCount.high) * dfSet.plywoodProductionModifier;
    nat.industries.plywood.production = (nat.industries.plywood.count * PlywoodCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBPlywoodProd);

    nat.industries.concrete.demand = (nat.population/100000) * dfSet.concreteDemand; // concrete total demand in CY
    nat.industries.concrete.count = genNumRange(ConcreteCorpCount.low, ConcreteCorpCount.high) * dfSet.concreteProductionModifier;
    nat.industries.concrete.production = (nat.industries.concrete.count * ConcreteCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBConcreteProd);

    nat.industries.miscBuildingMaterials.demand = (nat.population/100000) * dfSet.miscBuildDemand; // misc building total demand in CY
    nat.industries.miscBuildingMaterials.count = genNumRange(MiscBuildingCorpCount.low, MiscBuildingCorpCount.high) * dfSet.miscBuildProductionModifier;
    nat.industries.miscBuildingMaterials.production = (nat.industries.miscBuildingMaterials.count * MiscBuildingCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBMiscBuildProd);

    nat.industries.oilRefining.demand = (nat.population/100000) * dfSet.oilDemand; // oil total demand in bpd
    nat.industries.oilRefining.count = genNumRange(OilCorpCount.low, OilCorpCount.high) * dfSet.oilProductionModifier;
    nat.industries.oilRefining.production = (nat.industries.oilRefining.count * OilCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBOilProd);

    nat.industries.water.demand = (nat.population/100000) * dfSet.waterDemand; // water total demand in bpd
    nat.industries.water.count = genNumRange(WaterCorpCount.low, WaterCorpCount.high) * dfSet.waterProductionModifier;
    nat.industries.water.production = (nat.industries.water.count * WaterCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBWaterProd);

    nat.industries.markets.demand = (nat.population/100000) * dfSet.foodDemand; // food total demand in pounds per day
    nat.industries.markets.count = genNumRange(MarketCorpCount.low, MarketCorpCount.high) * dfSet.foodProductionModifier;
    nat.industries.markets.production = (nat.industries.markets.count * MarketCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBMarketProd);

    nat.industries.foodProcessing.demand = nat.industries.markets.production; // Demand comes from a markets "production"
    nat.industries.foodProcessing.count = genNumRange(FoodProcessCorpCount.low, FoodProcessCorpCount.high) * dfSet.foodProductionModifier;
    nat.industries.foodProcessing.production = (nat.industries.foodProcessing.count * FoodProcessCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBFoodProcessProd);

    nat.industries.foodFarming.demand = nat.industries.foodProcessing.production; // Demand comes from a food processing "production"
    nat.industries.foodFarming.count = genNumRange(FarmingCorpCount.low, FarmingCorpCount.high) * dfSet.foodProductionModifier;
    nat.industries.foodFarming.production = (nat.industries.foodFarming.count * FarmingCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBFarmingProd);


}
