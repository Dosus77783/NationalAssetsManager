import User from "../models/user.model.js";


// POST
export const registerUser = async (req, res, next) =>{
    try{
        const RES = await User.create(req.body);
        res.status(201).json(RES);
    }
    catch(error){
        console.log(error)
        next(error)
    }
}