import { Router } from "express"
import { } from "../controllers/country.controller.js" 

const countryRouter = Router();

countryRouter.route("/")
    .get( getAllPatients )
    .post( createPatient )

countryRouter.route("/:id")
    .get( getPatientById )
    .put( editPatientById )
    .delete( deletePatientById )
countryRouter.route("/documents/count")
    .get( getPatientCount )


export default countryRouter