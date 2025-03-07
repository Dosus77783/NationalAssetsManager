import { Router } from "express"
import { createCountry, editCountryTaxes, getAllCountriesAndUsers, getOneUserCountryComplex, getUserCountriesBasic, getUserCountryTaxes } from "../controllers/country.controller.js"

const countryRouter = Router();

countryRouter.route("/")
    .get( getAllCountriesAndUsers )
    .post( createCountry )
countryRouter.route("/:id")
    .get( getOneUserCountryComplex )
//     .put( editPatientById )
//     .delete( deletePatientById )
countryRouter.route("/taxes/:id")
    .get( getUserCountryTaxes )
    .put( editCountryTaxes )
countryRouter.route("/user/dashboard")
    .get( getUserCountriesBasic )


export default countryRouter