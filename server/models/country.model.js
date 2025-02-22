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
            migrants:{type:Number, default:0}, //population which does not add onto workingReal, so it is not part of the tax Revenue
        },
        birthRate:{
            daily:{type:Number, default:0},
            cbr:{type:Number, default:0},
            totalYearly:{type:Number, default:0} //daily multiplied by 365
        },
        deathRate:{
            daily:{type:Number, default:0},
            cdr:{type:Number, default:0},
            totalYearly:{type:Number, default:0} //daily multiplied by 365
        },
        industries:{ // describes how many large, and small corporations a country has, as well as their production and demand for an industry
            totalSmallBusiness:{type:Number, default:0 },
            // Depending on economic capabilities of a country (i.e. developing nation: 200, industrial: 50, or modern: 10)
            // this will created based on the countries population (pop / economic capibility)
            totalLargeCorp:{type:Number, default:0},
            electricity:{ // Measured in MegaWatts, 1 power plant produces 16,000 MW per day
                count:{type:Number, default:0}, // each corporation has about 4-5(4.5) power plants. So 72,000MW per day per corporation
                production:{type:Number, default:0}, // So 72,000MW per day per corporation
                // Small Businesse makes about 5MW per day. So 14,400 SBs = 1 electrical corp meaning 72,000MW
                demand:{type:Number, default:0} // dev = 280 MW, ind = 1300 Mw , mod = 3700 MW  -- per 100,000 per day.
            },
            steel:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            plywood:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            concrete:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            miscBuildingMaterials:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            oilRefining:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            water:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            foodProcessing:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            markets:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            foodFarming:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            materialFarming:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            },
            consumerGoods:{
                count:{type:Number, default:0},
                production:{type:Number, default:0},
                demand:{type:Number, default:0}
            }
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
                    military:{type:Number, default:0},
                    medicine:{type:Number, default:0},
                    highTech:{type:Number, default:0}
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
                    military:{type:Number, default:0},
                    medicine:{type:Number, default:0},
                    highTech:{type:Number, default:0}
                },
                corpoTax:{ // corpo profits * tax rate
                    smallBusiness:{type:Number, default:0},
                    largeCorpos:{type:Number, default:0}
                },
                salesTax:{type:Number, default:0} // domestic goods consuption * tax rate
            }
        },
        taxes:{
            incomeTax:{type:Number, default:0.1}, // this % will be multiplied onto income Salary averages of all professions.
            smallBusinessTax:{type:Number, default:0.15},
            largeCorpoTax:{type:Number, default:0.2},
            salesTax:{type:Number, default:0.05},
            propertyTax:{type:Number, default:0.01},
            socialSecurityTax:{type:Number, default:0.07}
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