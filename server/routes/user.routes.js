import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/")
    // .get( getAllPatients )
    .post( registerUser )

// countryRouter.route("/:id")
//     .get( getPatientById )
//     .put( editPatientById )
//     .delete( deletePatientById )


export default userRouter