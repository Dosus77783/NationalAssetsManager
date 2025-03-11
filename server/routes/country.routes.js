import { Router } from "express"
import { createCountry, editCountrySpending, editCountryTaxes, getAllCountriesAndUsers, getOneUserCountryComplex, getUserCountriesBasic, getUserCountrySpending, getUserCountryTaxes, removeCountryById } from "../controllers/country.controller.js"

const countryRouter = Router();

countryRouter.route("/")
    .get( getAllCountriesAndUsers )
    .post( createCountry )
countryRouter.route("/:id")
    .get( getOneUserCountryComplex )
    .delete( removeCountryById )
//     .put( editPatientById )
countryRouter.route("/taxes/:id")
    .get( getUserCountryTaxes )
    .put( editCountryTaxes )
countryRouter.route("/spending/:id")
    .get( getUserCountrySpending )
    .put( editCountrySpending )
countryRouter.route("/user/dashboard")
    .get( getUserCountriesBasic )


export default countryRouter