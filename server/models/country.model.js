import { model, Schema } from "mongoose";

const CountrySchema = new Schema(
    {
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
                young:{ type:Number, default:12500},    //population 18-30
                middleAged:{ type:Number, default:50000}, // population 30-60
                old:{ type:Number, default:25000}, // population 60+, this also doubles as the retired population
            },
            gradeSchoolStudents:{ type:Number, default:0}, // this number is all "children" in grade school
            universityStudents:{ type:Number, default:0}, // this number is all "young" in university and will be used to subract from the workingAge variable.
            workingAge:{type:Number, default:62500}, // young and middleAged groups added together for the number of working population potential.
            workingPop:{type:Number, default:0}, // number of people who are actually working
            profession:{ // the total of this objects members should equal the workingPop.
                workingClass:{type:Number, default:0},
                managerial:{type:Number, default:0},
                publicSector:{type:Number, default:0},
                teaching:{type:Number, default:0},
                military:{type:Number, default:0},
                medicine:{type:Number, default:0},
                highTech:{type:Number, default:0}
            },
            unemployedPop:{type:Number, default:0}, // number of people unemployed who are able to work
            disabledPop:{type:Number, default:0}, // number of people termnically sick, disabled, or otherwise cannot get back into the workforce, also in working age.
            migrants:{type:Number, default:0},
        },
        birthRate:{
            daily:{type:Number, default:0},
            cbr:{type:Number, default:0},
            totalYearly:{type:Number, default:0}
        },
        deathRate:{
            daily:{type:Number, default:0},
            cdr:{tpye:Number, default:0},
            totalYearly:{type:Number, default:0}
        },
        treasury:{type:Number, default:0},
        debt:{type:Number, default:0},


    },
    {timestamps: true}
)

    const Country = model("Country", CountrySchema);

export default Country