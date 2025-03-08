import { useContext, useState, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { getCountrySpending, updateCountrySpending } from "../services/countryServices";
import { autoLogin } from "../services/userServices";
import SpendingForm from "../components/SpendingForm";

export default function CountrySpendingView(){
    const {user, setUser} = useContext(userContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const DEFAULT_SPENDING = { 
        healthcare:0,
        education: 0,
        infrastructure: 0,
        familySubsidy: 0,
        socialAssistance: 0,
        valMsgs: { validationErrors: {} } 
    }
    const [ spendingData, setSpendingData ] = useState( DEFAULT_SPENDING );

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

        getCountrySpending(id)
            .then( (res) => {
                console.log(res)
                setSpendingData( {...res.spending, treasury: res.treasury, valMsgs: { validationErrors: {} } } )})
            .catch( (err) => console.log(err) )

    }, [])

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setSpendingData( prevObj => ( {...prevObj, [name]: Number(value), valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(spendingData, "in Spending FORM SUBMIT")

        updateCountrySpending( id, spendingData )
            .then( res => {
                navigate("/country/" + id)
                console.log(res, "in Spending SUCCESS")
            })
            .catch( err => {
                console.log(err, "in Spending IN CATCH")
                console.log(err.response.data, "in Spending IN DATA")
                setRegFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }

    return(
        <>
            <div className="border border-dark border-4 rounded mb-5 shadow-lg bg-secondary bg-opacity-75 bg-gradient">
                <h2 className="display-4 fw-bold font-monospace" >Spending</h2>
            </div>
            <SpendingForm formData={spendingData} onFormChange={onFormChange} formSubmition={formSubmition} />
        </>
    )
}