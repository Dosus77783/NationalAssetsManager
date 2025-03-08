import { useContext, useState, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { getCountryTaxes, updateCountryTaxes } from "../services/countryServices";
import { autoLogin } from "../services/userServices";
import TaxesForm from "../components/TaxesForm";

export default function CountryTaxesView(){
    const {user, setUser} = useContext(userContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const DEFAULT_TAXES = { 
        incomeTax:0.1,
        smallBusinessTax: 0.15,
        largeCorpoTax: 0.2,
        salesTax: 0.05,
        socialSecurityTax: 0.07,
        valMsgs: { validationErrors: {} } 
    }
    const [ taxesData, setTaxesData ] = useState( DEFAULT_TAXES );

    useEffect( ()=>{
        if(Object.keys(user).length === 0 ){
            autoLogin()
            .then( (res) => {
                setUser(res)
                return;
            } )
            .catch( (err) => { 
                console.log(err)
                navigate("/") 
            })
        }

        getCountryTaxes(id)
            .then( (res) => setTaxesData( {...res.taxes, valMsgs: { validationErrors: {} } } ))
            .catch( (err) => console.log(err) )

    }, [])

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setTaxesData( prevObj => ( {...prevObj, [name]: Number(value), valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(taxesData, "in Taxes FORM SUBMIT")

        updateCountryTaxes( id, taxesData )
            .then( res => {
                navigate("/country/" + id)
                console.log(res, "in Taxes SUCCESS")
            })
            .catch( err => {
                console.log(err, "in Taxes IN CATCH")
                console.log(err.response.data, "in Taxes IN DATA")
                setRegFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }

    return(
        <>
            <div className="border border-dark border-4 rounded mb-5 shadow-lg bg-secondary bg-opacity-75 bg-gradient">
                <h2 className="display-4 fw-bold font-monospace">Taxes</h2>
            </div>
            <TaxesForm formData={taxesData} onFormChange={onFormChange} formSubmition={formSubmition} />
        </>
    )
}