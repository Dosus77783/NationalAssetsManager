// import { useEffect } from "react";
// import Form from "../components/Form";
// import { usePatientsContext } from "../context/PatientsContext";
// import { createPatient, editPatientById, getPatientById, getPatientCount } from "../services/patientServices";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton.jsx";
import RegForm from "../components/RegForm.jsx";
import { registerUser } from '../services/userServices.js';

export default function RegistrationView(){
    const navigate = useNavigate();
    const REGDEFAULT = { username: "", email:"", password:"", confirmPassword:"", valMsgs:{ validationErrors:{} } };
    const [regFormData, setRegFormData] = useState( REGDEFAULT );

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setRegFormData( prevObj => ( {...prevObj, [name]:value, valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(regFormData, "in Registration FORM SUBMIT")
        registerUser( regFormData )
            .then( res => {
                navigate("/")
                console.log(res)
                setRegFormData( REGDEFAULT )
            })
            .catch( err => {
                console.log(err, "in Registration IN CATCH")
                console.log(err.response.data, "in Registration IN DATA")
                setRegFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }

    return(
        <>
            <div className="">
                <RegForm formData={regFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
            </div>
        </>
    )
}