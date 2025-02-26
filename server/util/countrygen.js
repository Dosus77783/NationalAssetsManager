
function genNumRange(min = 0, max = 50){
    return Math.floor((Math.random() * (max+1 - min)) + min)
} 

const difficultyChoices = ["Developing", "Industrial", "Modern"];
const DEVELOPING = {   
    popLow:10,
    popHigh:200,
    maleFemaleModifier:5, // Gets added to genNumRange equation
    ageModifier: {child:40, young: 20, middleAged:20}, // Starting % for the calculation
    gradeSchoolModifier: 70, // percentage of children in school
    universityModifier: 7, // percentage of young adults in university
    econCapabilityLow:100,
    econCapabilityHigh:250,
    unEmplModifier:4, //Starting percentage of unemployment in a country
    disabledModifier:3, // Starting percentage of disabled in a country
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
    materialDemand: 100000, // Pounds of material per day, per 100,000 people
    materialProductionModifier: 0.75,
    consumerGoodsDemand: 50, // Tons of goods per day, per 100,000 people
    consumerGoodsProductionModifier: .85,
};
const INDUSTRIAL = {   
    popLow:5,
    popHigh:150,
    maleFemaleModifier:3, // Gets added to genNumRange equation
    ageModifier: {child:25, young: 20, middleAged:30}, // Starting % for the calculation
    gradeSchoolModifier: 90, // percentage of children in school
    universityModifier: 20, // percentage of young adults in university
    econCapabilityLow:50,
    econCapabilityHigh:100,
    unEmplModifier:2, //Starting percentage of unemployment in a country
    disabledModifier:2, // Starting percentage of disabled in a country
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
    materialDemand: 200000, // Pounds of material per day, per 100,000 people
    materialProductionModifier: 1.5,
    consumerGoodsDemand: 200, // Tons of goods per day, per 100,000 people
    consumerGoodsProductionModifier: 2,
};
const MODERN = {   
    popLow:1,
    popHigh:100,
    maleFemaleModifier:2, // Gets added to genNumRange equation
    ageModifier: {child:15, young: 15, middleAged:40}, // Starting % for the calculation    
    gradeSchoolModifier: 99, // percentage of children in school
    universityModifier: 40, // percentage of young adults in university
    econCapabilityLow:10,
    econCapabilityHigh:50,
    unEmplModifier:1, //Starting percentage of unemployment in a country
    disabledModifier:1, // Starting percentage of disabled in a country
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
    materialDemand: 300000, // Pounds of material per day, per 100,000 people
    materialProductionModifier: 3,
    consumerGoodsDemand: 500, // Tons of goods per day, per 100,000 people
    consumerGoodsProductionModifier: 4.5,
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
const FoodProcessCorpCount = {low:2, high:5}; // Standard high and low possibility for food processing corporation count.
const SBFoodProcessProd = 2000; // pounds per day, 1 SB of food production
const FarmingCorpProd = 75000000; // 100 farms where each farm can produce 750,000 pounds of food per day
const FarmingCorpCount = {low:1, high:5}; // Standard high and low possibility for farming corporation count.
const SBFarmingProd = 6000; // pounds per day, 1 SB of farming production
const MaterialCorpProd = 25000000; // 100 farms where each farm can produce 250,000 pounds of materials per day
const MaterialCorpCount = {low:2, high:8}; // Standard high and low possibility for material corporation count.
const SBMaterialProd = 2100; // pounds per day, 1 SB of material production
const ConsumerGoodsCorpProd = 25000000; // 50 factories where each factory can produce 25,000 tons of goods per day
const ConsumerGoodsCorpCount = {low:1, high:4}; // Standard high and low possibility for goods corporation count.
const SBConsumerGoodsProd = 2100; // tons per day, 1 SB of goods production


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

    nat.industries.totalSmallBusiness = nat.population/nat.treasury.economicCapability;

    nat.industries.types.electricity.demand = (nat.population/100000) * dfSet.electricalDemand; // electrical total demand in MW 
    nat.industries.types.electricity.count = Math.ceil(genNumRange(ElecCorpCount.low, ElecCorpCount.high) * dfSet.electricalProductionModifier);
    nat.industries.types.elecriticty.production = (nat.industries.types.electricity.count * ElecCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBElecProd);

    nat.industries.types.steel.demand = (nat.population/100000) * dfSet.steelDemand; // steel total demand in tons
    nat.industries.types.steel.count = Math.ceil(genNumRange(SteelCorpCount.low, SteelCorpCount.high) * dfSet.steelProductionModifier);
    nat.industries.types.steel.production = (nat.industries.types.steel.count * SteelCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBSteelProd);

    nat.industries.types.plywood.demand = (nat.population/100000) * dfSet.plywoodDemand; // plywood total demand in BF
    nat.industries.types.plywood.count = Math.ceil(genNumRange(PlywoodCorpCount.low, PlywoodCorpCount.high) * dfSet.plywoodProductionModifier);
    nat.industries.types.plywood.production = (nat.industries.types.plywood.count * PlywoodCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBPlywoodProd);

    nat.industries.types.concrete.demand = (nat.population/100000) * dfSet.concreteDemand; // concrete total demand in CY
    nat.industries.types.concrete.count = Math.ceil(genNumRange(ConcreteCorpCount.low, ConcreteCorpCount.high) * dfSet.concreteProductionModifier);
    nat.industries.types.concrete.production = (nat.industries.types.concrete.count * ConcreteCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBConcreteProd);

    nat.industries.types.miscBuildingMaterials.demand = (nat.population/100000) * dfSet.miscBuildDemand; // misc building total demand in CY
    nat.industries.types.miscBuildingMaterials.count = Math.ceil(genNumRange(MiscBuildingCorpCount.low, MiscBuildingCorpCount.high) * dfSet.miscBuildProductionModifier);
    nat.industries.types.miscBuildingMaterials.production = (nat.industries.types.miscBuildingMaterials.count * MiscBuildingCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBMiscBuildProd);

    nat.industries.types.oilRefining.demand = (nat.population/100000) * dfSet.oilDemand; // oil total demand in bpd
    nat.industries.types.oilRefining.count = Math.ceil(genNumRange(OilCorpCount.low, OilCorpCount.high) * dfSet.oilProductionModifier);
    nat.industries.types.oilRefining.production = (nat.industries.types.oilRefining.count * OilCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBOilProd);

    nat.industries.types.water.demand = (nat.population/100000) * dfSet.waterDemand; // water total demand in bpd
    nat.industries.types.water.count = Math.ceil(genNumRange(WaterCorpCount.low, WaterCorpCount.high) * dfSet.waterProductionModifier);
    nat.industries.types.water.production = (nat.industries.types.water.count * WaterCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBWaterProd);

    nat.industries.types.markets.demand = (nat.population/100000) * dfSet.foodDemand; // food total demand in pounds per day
    nat.industries.types.markets.count = Math.ceil(genNumRange(MarketCorpCount.low, MarketCorpCount.high) * dfSet.foodProductionModifier);
    nat.industries.types.markets.production = (nat.industries.types.markets.count * MarketCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBMarketProd);

    nat.industries.types.foodProcessing.demand = nat.industries.types.markets.production; // Demand comes from a markets "production"
    nat.industries.types.foodProcessing.count = Math.ceil(genNumRange(FoodProcessCorpCount.low, FoodProcessCorpCount.high) * dfSet.foodProductionModifier);
    nat.industries.types.foodProcessing.production = (nat.industries.types.foodProcessing.count * FoodProcessCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBFoodProcessProd);

    nat.industries.types.foodFarming.demand = nat.industries.types.foodProcessing.production; // Demand comes from a food processing "production"
    nat.industries.types.foodFarming.count = Math.ceil(genNumRange(FarmingCorpCount.low, FarmingCorpCount.high) * dfSet.foodProductionModifier);
    nat.industries.types.foodFarming.production = (nat.industries.types.foodFarming.count * FarmingCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBFarmingProd);

    nat.industries.types.materialFarming.demand = (nat.population/100000) * dfSet.materialDemand; // Demand total in pounds of material per day
    nat.industries.types.materialFarming.count = Math.ceil(genNumRange(MaterialCorpCount.low, MaterialCorpCount.high) * dfSet.materialProductionModifier);
    nat.industries.types.materialFarming.production = (nat.industries.types.materialFarming.count * MaterialCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBMaterialProd);

    nat.industries.types.consumerGoods.demand = (nat.population/100000) * dfSet.consumerGoodsDemand; // Demand total in pounds of material per day
    nat.industries.types.consumerGoods.count = Math.ceil(genNumRange(ConsumerGoodsCorpCount.low, ConsumerGoodsCorpCount.high) * dfSet.consumerGoodsProductionModifier);
    nat.industries.types.consumerGoods.production = (nat.industries.types.consumerGoods.count * ConsumerGoodsCorpProd) + ((nat.industries.totalSmallBusiness / SBDivision) * SBConsumerGoodsProd);

    nat.industries.totalLargeCorp = (() => {
        let total = 0;
        for(let ind in nat.industries.types){
            total += nat.industries.types[ind].count;
        }
        return total;
    })();
    // Could use a Object.values().reduce() method instead.

    nat.demographics.male = nat.population * (genNumRange(49, 49 + dfSet.maleFemaleModifier) * 0.01);
    nat.demographics.female = nat.population - nat.demographics.male;

    nat.demographics.ageRange.children = 
        Math.round(nat.population * (0.01 * (dfSet.ageModifier.child + linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 1, 10, nat.treasury.economicCapability))));
    nat.demographics.ageRange.young =
        Math.round(nat.population * (0.01 * (dfSet.ageModifier.young + linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 1, 10, nat.treasury.economicCapability))));
    nat.demographics.ageRange.middleAged = 
        Math.round(nat.population * (0.01 * (dfSet.ageModifier.middleAged + linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 1, 10, nat.treasury.economicCapability))));
    nat.demographics.ageRange.old =
        nat.population - nat.demographics.ageRange.children - nat.demographics.ageRange.young -nat.demographics.ageRange.middleAged;
    
    nat.demographics.gradeSchoolStudents = 
        nat.demographics.ageRange.children * (0.01*(dfSet.gradeSchoolModifier - linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 1, 20, nat.treasury.economicCapability)));
    
    nat.demographics.universityStudents = 
        nat.demographics.ageRange.young * (0.01*(dfSet.gradeSchoolModifier - linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 1, 6, nat.treasury.economicCapability)));

    nat.demographics.workingAge = nat.demographics.ageRange.young + nat.demographics.ageRange.middleAged;
    nat.demographics.unemployedPop = 
        nat.demographics.workingAge * (0.01*(dfSet.unEmplModifier + linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 0, 12, nat.treasury.economicCapability)));
    nat.demographics.disabledPop = 
        nat.demographics.workingAge * (0.01*(dfSet.unEmplModifier + linearMappingScale(dfSet.econCapabilityLow, dfSet.econCapabilityHigh, 0, 5, nat.treasury.economicCapability)));
    nat.demographics.workingReal = nat.demographics.workingAge - nat.demographics.unemployedPop - nat.demographics.disabledPop;

    // nat.demographics.profession.workingClass = 
}
// console.log(Math.round(110000000 * (0.01 * (25 + (1+(((48-10)*(10-1)) / (50-10)))   ))));

function linearMappingScale(oRangeA, oRangeB, nRangeA, nRangeB, Input){
    return Math.round( (( (Input - oRangeA)*(nRangeB - nRangeA) ) / (oRangeB - oRangeA)) );
}