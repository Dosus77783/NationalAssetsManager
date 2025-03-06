import { Router } from "express"
import { createCountry, getAllCountriesAndUsers, getOneUserCountryComplex, getUserCountriesBasic } from "../controllers/country.controller.js"

const countryRouter = Router();

countryRouter.route("/")
    .get( getAllCountriesAndUsers )
    .post( createCountry )
countryRouter.route("/:id")
    .get( getOneUserCountryComplex )
//     .put( editPatientById )
//     .delete( deletePatientById )
countryRouter.route("/user/dashboard")
    .get( getUserCountriesBasic )


export default countryRouter