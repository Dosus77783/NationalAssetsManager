import NationForm from "../components/NationForm";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { createCountryService } from '../services/countryServices.js'
import { autoLogin } from "../services/userServices.js";

export default function NationFormView(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();

    useEffect( () => {
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
        <div id="nationformview" className="rounded-3xl drop-shadow-xl lg:px-15 md:px-10 px-5 py-5 my-5 lg:col-start-3 lg:col-span-2 md:col-start-2 md:col-span-4 col-start-2 col-span-4">
            <NationForm formData={ nationData } onFormChange={ onFormChange } formSubmition={ formSubmition } />
        </div>
    )
}