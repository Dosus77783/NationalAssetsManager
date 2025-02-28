import { model, Schema } from "mongoose";

const CountrySchema = new Schema(
    {
        owner:String,
        name:{
            type: String,
            required: [true, "A Country must have a name."],
            minlength: [2, "A Countries name cannot be more then 2 characters long"],
            maxlength: [40, "A Countries name cannot be less then 40 characters long"]
        },
        government:{
            type:String,
            enum:["Democracy", "Republic", "Monarchy", "Theocracy", "Fascist", "Communist"],
            required: [true, "A government type must be chosen."]
        },
        difficulty:{
            type:String,
            enum:["Random", "Developing", "Industrial", "Modern"],
            default:"Random"
        },
        land:{
            type:[[String]], 
            default:[]
        },
        borders:{
            type:[[String]], 
            default:[]
        },
        population:{type:Number, default:100000},
        demographics:{
            male:{ type:Number, default:50000},
            female:{ type:Number, default:50000},
            ageRange:{
                children:{type:Number, default:12500},  //population under 18
                young:{ type:Number, default:12500},    //population 18-29
                middleAged:{ type:Number, default:50000}, // population 30-60
                old:{ type:Number, default:25000}, // population 60+, this also doubles as the retired population
            },
            gradeSchoolStudents:{ type:Number, default:0}, // this number is all "children" in grade school
            universityStudents:{ type:Number, default:0}, // this number is all "young" in university and will be used to subract from the workingAge variable.
            workingAge:{type:Number, default:62500}, // young and middleAged groups added together for the number of working population potential.
            workingReal:{type:Number, default:0}, // number of people who are actually working
            profession:{ // the total of this objects members should equal the workingReal.
                workingClass:{type:Number, default:0},
                managerial:{type:Number, default:0},
                publicSector:{type:Number, default:0},
                teaching:{type:Number, default:0},
                medicine:{type:Number, default:0},
                highTech:{type:Number, default:0},
                military:{type:Number, default:0} // professions will be a percentage of workingReal
            },
            unemployedPop:{type:Number, default:0}, // number of people unemployed who are able to work
            disabledPop:{type:Number, default:0}, // number of people termnically sick, disabled, or otherwise cannot get back into the workforce, also in working age.
        },
        birthRate:{
            daily:{type:Number, default:0},
            cbr:{type:Number, default:0}, // crude birth rate
            totalYearly:{type:Number, default:0} //daily multiplied by 365
        },
        deathRate:{
            daily:{type:Number, default:0},
            cdr:{type:Number, default:0}, // crude death rate
            totalYearly:{type:Number, default:0} //daily multiplied by 365
        },
        industries:{ // describes how many large, and small businesses a country has, as well as their production and demand for an industry
            totalSmallBusiness:{type:Number, default:0 },
            // Depending on economic capabilities of a country (i.e. developing nation: 250, industrial: 50, or modern: 10)
            // this will be created based on the countries population (pop / economic capibility)
            totalLargeCorp:{type:Number, default:0},
            types:{
                electricity:{ // Measured in MegaWatts, 1 power plant produces 16,000 MW per day
                    price:{type:Number, default:50}, // MWh
                    count:{type:Number, default:0}, // each corporation has about 4-5(4.5) power plants.
                    production:{type:Number, default:0}, // So 72,000MW per day per corporation
                    // Small Businesses makes about 3MW per day. So 24,000 SBs = 1 electrical corp meaning 72,000MW
                    demand:{type:Number, default:0} // dev = 280 MW, ind = 1300 Mw , mod = 3700 MW  -- per 100,000 per day.
                },
                steel:{ // Measured in tons, 1 steel plant produces 5,000 tons of steel per day.
                    price:{type:Number, default:800}, // per Ton of steel
                    count:{type:Number, default:0}, // each corp has 4 steel plants. Each make 5,000 tons per day.
                    production:{type:Number, default:0},// so 20,000 tons per day per corp
                    // Small businesses make about 2 tons per day. So 10,000 SBs = 1 corps worth of production.
                    demand:{type:Number, default:0} // dev = 200 tons, ind = 1000 tons, mod = 2500 tons -- per 100,000 people per day
                },
                plywood:{ // Measured in Board Feet, BF. 1 plywood plant produces 350,000 BF per day
                    price:{type:Number, default:0.5}, // per Board Foot of plywood
                    count:{type:Number, default:0}, // Each corp has 20 factories
                    production:{type:Number, default:0}, // Each corp produces 7,000,000 BF
                    // SBs make 850 BF per day, so it takes 8235.5 SBs to make 1 corps worth of production.
                    demand:{type:Number, default:0} // dev = 40,000 BF, ind = 100,000 BF, mod = 300,000 BF per day per 100,000 people
                    // 110M, example nation: dev = 44,000,000 BF, ind = 110,000,000 BF, mod = 330,000,000 BF total demand per day
                },
                concrete:{ // Measured in cupic yards, CY. 1 plant produces 5,000 cupic yards per day.
                    price:{type:Number, default:130}, // Per Cubic Yard of Concrete
                    count:{type:Number, default:0}, // 1 corp is 20 plants
                    production:{type:Number, default:0}, // 1 corp produces 100,000 CY of concrete
                    // SBs make 5 CY per day, so it takes 20,000 SBs to match a single corp.
                    demand:{type:Number, default:0} // dev = 500 CY, ind = 2,000 CY, mod = 5,000 CY per day per 100,000 people
                    // 110M example. dev = 	550,000 CY, ind = 2,200,000 CY, mod = 5,500,000 CY
                },
                miscBuildingMaterials:{// Measured in tons, 1 plant = 1,000 tons 
                    price:{type:Number, default:500}, // per ton of misc. materials
                    count:{type:Number, default:0}, // 10 plants = 1 corp = 10,000 tons per day
                    production:{type:Number, default:0}, // SBs make 0.5 tons, 36,000 SBs = 18,000 tons = 1.8 corps worth
                    demand:{type:Number, default:0} // dev = 50, ind = 200, mod = 500 tons per day per 100,000 people
                    // 110M example, dev = 55,000 tons, ind = 220,000 tons, mod =550,000 tons. 6 corps, 22 corps, 55 corps
                },
                oilRefining:{// Measured in barrels of oil per day, bpd. 1 refinery = 250,000 bpd
                    price:{type:Number, default:80}, // per barrel of oil
                    count:{type:Number, default:0}, // 3 refineries = 1 corp = 750,000 bpd
                    production:{type:Number, default:0}, // SBs = 8bpd, 36,000 SBs = 288,000 bpd. About 1/3rd of 1 corp
                    demand:{type:Number, default:0} // dev = 1,500, ind = 3,000, mod = 6,100 barrels per day, per 100,000 people
                    //110M example, dev = 1,650,000 bpd, ind = 3,350,000 bpd, mod = 6,710,000 bpd. 3 corps, 5 corps, 9 corps
                },
                water:{ // Measured in barrels of water, 1 barrel is 42 gallons, 1 plant = 2,000,000 barrels per day
                    price:{type:Number, default:5}, // per barrel of water, priced at tap water not bottled
                    count:{type:Number, default:0}, // 10 plants = 1 corp = 20,000,000 bpd
                    production:{type:Number, default:0}, // SBs = 500 bpd. 36,000 SBs = 18,000,000 bpd. About 0.9 of 1 corp.
                    demand:{type:Number, default:0} // dev = 250,000, ind = 500,000 , mod = 700,000 bpd
                    //110M example, dev = 275,000,000 bpd, ind = 550,000,000 bpd, mod = 770,000,000 bpd. 14 corps, 28 corps, 35 corps
                },
                foodProcessing:{ // Measured in pounds of food per day. 1 plant = 10,000,000 Ibs per day
                    price:{type:Number, default:0.50}, // per pound of processed food
                    count:{type:Number, default:0}, // 10 plants = 1 corp = 100,000,000 Ib per day
                    production:{type:Number, default:0}, // SBs = 2000 Ibs per day. 36,000 * 2000 = 72,000,000 Ibs
                    demand:{type:Number, default:0} // Demand is whatever the production is for markets
                },
                markets:{ // Measured in pounds of food, each store can handle 5,000  Ibs per day
                    price:{type:Number, default:2}, // per pound of grocery store food 
                    count:{type:Number, default:0}, // 5,000 stores = 1 corp = 25,000,000 pounds per day
                    production:{type:Number, default:0}, // SBs = 4000 pounds. 36000 * 4000 = 144,000,000 pounds
                    demand:{type:Number, default:0} // dev = 400,000 ind = 450,000 , mod = 500,000 pounds of food per 100,000 people per day
                    //110M example, dev = 440,000,000 , ind = 495,000,000, mod = 550,000,000 pounds per day . 18 corps, 20 corps, 22 corps
                },
                foodFarming:{ // Measured in pounds of raw food per day. 1 Farm = 750,000 Ibs of food per day
                    price:{type:Number, default:0.15}, // per pound of raw food
                    count:{type:Number, default:0}, // 100 farms = 1 corp = 75,000,000 Ibs per day
                    production:{type:Number, default:0}, // SBs = 6,000 Ibs of food farmed per day. 36,000 * 6,000 = 216,000,000 Ibs produced
                    demand:{type:Number, default:0} // Demand will come from food processing production + 10% (Since Raw food is being processed, there is a bit of loss)
                },
                materialFarming:{ // Measured in Ibs of material per day. 1 farm makes 250,000 Ibs per day
                    price:{type:Number, default:1.50}, // per pound of material goods (cotton,wool etc.)
                    count:{type:Number, default:0}, // 100 farms = 1 corp = 25,000,000 Ibs per day
                    production:{type:Number, default:0}, // SBs = 2100 pounds, 36,000 SBs = 75,600,000 Ibs per day
                    demand:{type:Number, default:0} // dev = 100,000 ind = 200,000 mod = 300,000 pounds of material per 100,000 people per day
                    //110M example, dev = 110,000,000 ind = 220,000,000 mod = 330,000,000 pounds per day . 5 corps, 9 corps, 14 corps
                },
                consumerGoods:{ // Measured in tons, 1 factory produces 500 tons per day
                    price:{type:Number, default:4000}, // per ton of manafactured consumer goods
                    count:{type:Number, default:0}, // 50 factories = 1 corp = 25,000 tons per day
                    production:{type:Number, default:0}, // SBs = 0.2 tons per day. 36,000 * 0.2 = 7,200 tons
                    demand:{type:Number, default:0} // dev = 50 ind = 200 mod = 500 tons of consumer goods per 100,000 people per day
                    //110M example, dev = 55,000 ind = 220,000 mod = 550,000 tons per day . 3 corps, 9 corps, 22 corps
                }
            },
        },
        treasury:{
            economicCapability:{type:Number, default:200},
            current:{type:Number, default:1000000},
            debt:{type:Number, default:0},
            countryProfits:{ // overall profit of entire countries systems
                incomeSalaryAvg:{ // average income of every profession
                    workingClass:{type:Number, default:0},
                    managerial:{type:Number, default:0},
                    publicSector:{type:Number, default:0},
                    teaching:{type:Number, default:0},
                    medicine:{type:Number, default:0},
                    highTech:{type:Number, default:0},
                    military:{type:Number, default:0}
                },
                corpoProfits:{ // overall profit of SBs and LCs before taxes
                    smallBusiness:{type:Number, default:0},
                    largeCorpos:{type:Number, default:0}
                },
                consumerGoodsConsumption:{type:Number, default:0}, // domestic sale of all consumer goods in the country, used for sales tax calculating
                tradeProfits:{type:Number, default:0} // the profits from (export - import) for all industries.
            },
            taxRevenue:{
                total:{type:Number, default:0},
                incomeTax:{ // (salary avg * profession population) * tax rate
                    workingClass:{type:Number, default:0}, 
                    managerial:{type:Number, default:0},
                    publicSector:{type:Number, default:0},
                    teaching:{type:Number, default:0},
                    medicine:{type:Number, default:0},
                    highTech:{type:Number, default:0},
                    military:{type:Number, default:0},
                },
                corpoTax:{ // corpo profits * tax rate
                    smallBusiness:{type:Number, default:0},
                    largeCorpos:{type:Number, default:0}
                },
                salesTax:{type:Number, default:0}, // domestic goods consuption * tax rate
                socialSecurityTax:{type:Number, default:0}, // profession * socialSecurityTax
            }
        },
        taxes:{
            incomeTax:{type:Number, default:0.1}, // this % will be multiplied onto income Salary averages of all professions.
            smallBusinessTax:{type:Number, default:0.15},
            largeCorpoTax:{type:Number, default:0.2},
            salesTax:{type:Number, default:0.05},
            socialSecurityTax:{type:Number, default:0.07},
            // propertyTax:{type:Number, default:0.01}, // Need land generation to properly implement this
        },
        spending:{ // This will by direct $ amount spent daily (as opposed to percentage)
            healthcare:{type:Number, default:0}, // increases birthRate, decreases deathRate
            education:{type:Number, default:0}, // increases % of managerial, publicSector, teaching, medicine, and highTech workers.
            infrastructure:{type:Number, default:0}, // Only thing this does right now is increase revenue of professions and corporations/busineses by a bit.
            familySubsidy:{type:Number, default:0}, // Increases birthRates, and slightly increases workingClass, teaching salaries
            socialAssistance:{type:Number, default:0}, // increases birthRates a little, decreases deathRates. Increases gradeSchool and university students. Also increases migrants.
            // lawEnforcement:{type:Number, default:0}, // decreases crime rate, need to implement.
        },
        trade:{
            electrical:{type:Boolean, default:false},
            steel:{type:Boolean, default:false},
            plywood:{type:Boolean, default:false},
            concrete:{type:Boolean, default:false},
            miscBuildingMaterials:{type:Boolean, default:false},
            oilRefining:{type:Boolean, default:false},
            water:{type:Boolean, default:false},
            foodProcessing:{type:Boolean, default:false},
            markets:{type:Boolean, default:false},
            foodFarming:{type:Boolean, default:false},
            materialFarming:{type:Boolean, default:false},
            consumerGoods:{type:Boolean, default:false},
        }
    },
    {timestamps: true}
)

const Country = model("Country", CountrySchema);

export default Country