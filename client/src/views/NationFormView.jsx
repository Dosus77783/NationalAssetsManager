import NationForm from "../components/NationForm";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { createCountryService } from '../services/countryServices.js'

export default function NationFormView(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();

    useEffect( () => {
        if(Object.keys(user).length === 0 ){
            navigate("/") 
        }
    }, [])

    const NATION_DEFAULT = { countryName:"", government:"", difficulty:"Random", valMsgs:{ validationErrors:{} } };
    const [nationData, setNationData] = useState( NATION_DEFAULT )

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setNationData( prevObj => ( {...prevObj, [name]:value, valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(nationData, "in NationFormView FORM SUBMIT")
        
        createCountryService( nationData )
            .then( res => {
                console.log(res)
                setNationData( NATION_DEFAULT )
                navigate("/dashboard")
            })
            .catch( err => {
                console.log(err, "in NationFormView IN CATCH")
                console.log(err.response.data, "in NationFormView IN DATA")
                setNationData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }

    return(
        <div className="w-75 mx-auto p-5 rounded shadow-lg bg-primary bg-opacity-50">
            <NationForm formData={ nationData } onFormChange={ onFormChange } formSubmition={ formSubmition } />
        </div>
    )
}