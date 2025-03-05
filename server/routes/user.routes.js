import { Router } from "express"
import { registerUser, loginUserByCridentials, logout, getLoggedInUser } from "../controllers/user.controller.js";
// import authenticate from '../config/jwt.config.js'

const userRouter = Router();

userRouter.route("/register").post( registerUser )
userRouter.route("/login").post( loginUserByCridentials )
userRouter.route("/logout").post( logout )

userRouter.route("/:id")
    .get( getLoggedInUser )

// countryRouter.route("/:id")
//     .get( getPatientById )
//     .put( editPatientById )
//     .delete( deletePatientById )


export default userRouter