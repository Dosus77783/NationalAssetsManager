// import { useEffect } from "react";
// import Form from "../components/Form";
// import { usePatientsContext } from "../context/PatientsContext";
// import { createPatient, editPatientById, getPatientById, getPatientCount } from "../services/patientServices";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm  from "../components/LoginForm";
import NavButton from "../components/NavButton";
import { loginUser } from '../services/userServices.js';

export default function HomePageView(){
    const navigate = useNavigate();
    const LOGINDEFAULT = { email:"", password:"", valMsgs:{ validationErrors:{} } };
    const [loginFormData, setLoginFormData] = useState( LOGINDEFAULT );

    
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData( prevObj => ( {...prevObj, [name]:value, valMsgs:{ validationErrors:{} }  } ))
    }


    // useEffect(()=>{

    //     if( route == "create"    ){
    //         dispatch( {
    //             type:"updateView", 
    //             payload:{ header:"Admit Patient", btnMsg:""}
    //         } )
    //     }else{
    //         getPatientById( id )
    //             .then( res => {
    //                 dispatch({
    //                     type:"updateView", 
    //                     payload:{ 
    //                         header:`Update ${res.patientName}`, 
    //                         btnMsg:"Details", 
    //                         navLocation: `/${id}/details`}
    //                 })
    //                 dispatch({
    //                     type:"prePopulateForm",
    //                     payload: res
    //                 })
    //             })
    //             .catch( err => dispatch({
    //                 type: "updateValidations", 
    //                 payload: err.response.data 
    //             }))
    //     }

    // }, [route, id])


    const formSubmition = (e) => {
        e.preventDefault();
        console.log(loginFormData, "in HomePageView FORM SUBMIT")
        loginUser( loginFormData )
            .then( res => {
                navigate("/")
                console.log(res)
                setLoginFormData( LOGINDEFAULT )
            })
            .catch( err => {
                console.log(err, "in HomePageView IN CATCH")
                console.log(err.response.data, "in HomePageView IN DATA")
                setLoginFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }


    return(
        <>
            <div className="border border-dark border-3">
                <LoginForm formData={loginFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
                <p>
                    Don't have a login?
                    <NavButton btnText={"Register"} navigation={"/registration"} />
                </p>
            </div>
        </>
    )
}