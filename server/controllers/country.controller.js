import Country from "../models/country.model.js";
import countryGenerator from "../util/countrygen.js"

// POST

export const createCountry = async (req, res, next) =>{
    try{
        console.log(req.body)
        let RES = await Country.create(req.body);
        RES = await Country.findByIdAndUpdate( RES._id, countryGenerator(RES), { runValidators: false });
        // cronJobData = {name: RES.name, _id: RES._id}
        // Start countries cron job
        res.status(201).json(RES);
        console.log(RES);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

// GET

// export const getAllPatients = async (req, res, next) =>{
//     try{
//         const RES = await Patient.find();
//         res.status(200).json(RES);
//     }
//     catch(error){
//         console.log(error)
//         next(error)
//     }
// }

// export const getPatientCount= async (req, res, next) =>{
//     try{
//         const RES = await Patient.countDocuments();
//         res.status(200).json(RES);
//     }
//     catch(error){
//         console.log(error)
//         next(error)
//     }
// }


// export const getPatientById = async (req, res, next) => {
//     try{
//         const RES = await Patient.findById( req.params.id );

//         if(RES == null){throw null}
//         res.status(200).json(RES);
//     }
//     catch(error){
//         console.log(error)
//         next(error)
//     }
// }


// UPDATE

// export const editPatientById = async (req, res, next) => {
//     try{
//         const RES = await Patient.findByIdAndUpdate(
//             req.params.id, 
//             req.body, 
//             { runValidators: true }
//         );

//         if(RES == null){throw null}
//         res.status(200).json(RES);
//     }
//     catch(error){
//         console.log(error)
//         next(error)
//     }
// }

// DELETE

// export const deletePatientById = async (req, res, next) => {
//     try{
//         const RES = await Patient.findByIdAndDelete( req.params.id );

//         if(RES == null){throw null}
//         res.status(200).json(RES);
//     }
//     catch(error){
//         console.log(error)
//         next(error)
//     }
// }