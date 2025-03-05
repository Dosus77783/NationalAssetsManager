import { Router } from "express"
import { createCountry } from "../controllers/country.controller.js"

const countryRouter = Router();

countryRouter.route("/")
    // .get( getAllPatients )
    .post( createCountry )

// countryRouter.route("/:id")
//     .get( getPatientById )
//     .put( editPatientById )
//     .delete( deletePatientById )


export default countryRouter