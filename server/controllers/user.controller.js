import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';




// REGISTER
export const registerUser = async (req, res, next) =>{
    try{
        const USER = await User.create(req.body);

        const userToken = jwt.sign( {userId: USER._id, username:USER.username } , process.env.FIRST_SECRET_KEY);
        res.cookie("usertoken", userToken, { httpOnly: true })
        // secure: process.env.NODE_ENV === 'production',       // Ensures the cookie is only sent over HTTPS in production
        // sameSite: 'strict', });                              // Prevents the cookie from being sent in cross-site requests
        .json( { message:"Succesful Registration!", user: USER} ); 
        res.status(201);
    }
    catch(error){
        console.log("in controller CATCH ----- REGISTER")
        next(error)
    }
}

// LOGIN
export const loginUserByCridentials = async (req, res, next) => {
    try{
        const USER = await User.findOne( { email: req.body.email } );
        console.log(USER, "in controller ----- LOGIN")
        if(USER == null){ 
            throw { 
                name: "ValidationError",
                message: "Your email or password are invalid",
                errors:{ email: { message: "Email not found"}  }
            } 
        }

        const isPassCorrect = await bcrypt.compare( req.body.password, USER.password);
        if(!isPassCorrect) { 
            throw { 
                name: "ValidationError",
                message: "Your email or password are invalid",
                errors: { password: { message:"Invalid Password" } }
            }  
        };

        // notice that we're using the SECRET_KEY from our .env file
        const userToken = jwt.sign( {userId: USER._id, username:USER.username } , process.env.FIRST_SECRET_KEY);

        res.cookie("usertoken", userToken, { httpOnly: true })
        // secure: process.env.NODE_ENV === 'production',       // Ensures the cookie is only sent over HTTPS in production
        // sameSite: 'strict', });                              // Prevents the cookie from being sent in cross-site requests
        .json( USER ); 

    }
    catch(error){
        console.log("in User Controller caught error ----- LOGIN")
        next(error)
    }
}

export const automaticLogin = async (req, res, next) => {
    try{

        if(!req.cookies.usertoken){ throw res.status(400) }

        const decodedToken = jwt.decode(req.cookies.usertoken, { complete:true } );
        // console.log("Token----------",decodedToken);
        // console.log("Req.Body ------------", req.body);
        const userId = decodedToken.payload.userId;

        const RES = await User.findById(userId)
        res.status(200).json(RES)
    }
    catch(error){
        console.log("in User Controller caught error ----- AUTOMATIC LOGIN")
        next(error)
    }
}

// LOGOUT

export const logout = async (req, res, next) => {
    try{
        res.clearCookie("usertoken").status(200).json({message: "Succesfully Logged Out"});
        console.log("in User Controller ----- LOGOUT")
    }
    catch(error){
        console.log("in User Controller caught error ----- LOGOUT")
    }
}

// GET 

export const getLoggedInUser = async (req, res, next) => {
    try{
        const USER = await User.findById( req.params.id )

        res.status(200).json(USER);

    }
    catch(error){
        console.log("in User Controller caught error ----- LOGOUT")
    }
}