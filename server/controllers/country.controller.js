import Country from "../models/country.model.js";
import User from "../models/user.model.js";
import countryGenerator from "../util/countrygen.js"
import createJobCycle from "../util/cycleReproduction.js"
import jwt from 'jsonwebtoken'

// POST

export const createCountry = async (req, res, next) =>{
    try{
        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;
        let cResult = { ...req.body, userId };
        cResult = await Country.create(cResult);
        cResult = await Country.findByIdAndUpdate( cResult._id, countryGenerator(cResult), { runValidators: false });

        await User.findByIdAndUpdate( userId, {$push: {countries: cResult._id }} )

        createJobCycle( {countryName: cResult.countryName, _id: cResult._id} );

        res.status(201).json(cResult);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

// GET

export const getOneUserCountryComplex = async (req, res, next) =>{
    try{
        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const COUNTRY = await Country.findById( req.params.id );
        if(COUNTRY.userId != userId){
            throw res.status(400);
        }
        console.log(COUNTRY.countryName, "----Succesful Retrieval----", decodedToken.payload.username);
        res.status(200).json(COUNTRY);
    }
    catch(error){
        console.log(error)
        next(error)
    }
} 

export const getUserCountriesBasic = async (req, res, next) =>{
    try{
        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const USER_WITH_COUNTRIES_BASIC = await User.findById(userId).populate( {path:'countries', select:'countryName government difficulty'} );
        console.log(USER_WITH_COUNTRIES_BASIC);
        res.status(200).json(USER_WITH_COUNTRIES_BASIC);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const getUserCountryTaxes = async (req, res, next) =>{
    try{
        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const COUNTRY = await Country.findById( req.params.id, 'taxes userId' );
        if(COUNTRY.userId != userId){
            throw res.status(400);
        }

        console.log("----Succesful TAXES Retrieval----", decodedToken.payload.username);
        res.status(200).json(COUNTRY);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const getUserCountrySpending = async (req, res, next) =>{
    try{
        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------SpendingGET",decodedToken);
        console.log("Req.Body ------------SpendingGET");
        const userId = decodedToken.payload.userId;

        const COUNTRY = await Country.findById( req.params.id, { 'treasury.taxRevenue.total': 1, spending:1, userId:1} );
        console.log(COUNTRY)
        if(COUNTRY.userId != userId){
            throw res.status(400);
        }

        console.log("----Succesful SPENDING Retrieval----", decodedToken.payload.username);
        res.status(200).json(COUNTRY);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const getAllCountriesAndUsers = async (req, res, next) =>{
    try{
        const RES = await Country.find().populate('userId');
        console.log(RES);
        res.status(200).json(RES);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}


// UPDATE

export const editCountryTaxes = async (req, res, next) => {
    try{

        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const COUNTRY = await Country.findById( req.params.id, 'userId' );
        if(COUNTRY.userId != userId){
            throw res.status(400);
        }

        const RES = await Country.findByIdAndUpdate(
            req.params.id, 
            {taxes: req.body}
        );

        res.status(200).json(RES);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

export const editCountrySpending = async (req, res, next) => {
    try{

        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        console.log("Token----------",decodedToken);
        console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const COUNTRY = await Country.findById( req.params.id, 'userId' );
        if(COUNTRY.userId != userId){
            throw res.status(400);
        }

        const RES = await Country.findByIdAndUpdate(
            req.params.id, 
            {spending: req.body}
        );

        res.status(200).json(RES);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

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