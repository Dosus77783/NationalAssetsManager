import { Router } from "express"
import { registerUser, loginUserByCridentials, logout, getLoggedInUser } from "../controllers/user.controller.js";
import authenticate from '../config/jwt.config.js'

const userRouter = Router();

userRouter.route("/register").post( registerUser )
userRouter.route("/login").post( loginUserByCridentials )
userRouter.route("/logout").post( authenticate, logout )

userRouter.route("/:id")
    .get( authenticate, getLoggedInUser )




export default userRouter