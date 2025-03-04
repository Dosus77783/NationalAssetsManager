// import { useEffect } from "react";
// import Form from "../components/Form";
// import { useNavigate, useParams } from "react-router-dom"
// import { usePatientsContext } from "../context/PatientsContext";
// import { createPatient, editPatientById, getPatientById, getPatientCount } from "../services/patientServices";

import { NavButton } from "../components/NavButton";
import LoginForm from "../components/LoginForm";

export function HomePageView(){
    // const navigate = useNavigate();
    // const { id } = useParams();
    // const { formData, dispatch } = usePatientsContext();

    // useEffect(()=>{
    //     getPatientCount()
    //         .then( res => dispatch({type:"setCount", payload: res}) )
    //         .catch( err => console.log(err) )

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

    // const onFormChange = (e) => dispatch( {type:"onFormChange", payload: e } )

    // const formSubmition = (e) => {
    //     e.preventDefault();

    //     const formFunction = route == "create"
    //         ? () => createPatient( formData )
    //         : () => editPatientById( id , formData );
    //     formFunction()
    //         .then( res => {
    //             route == "create"
    //                 ? navigate("/patients")
    //                 : navigate(`/${id}/details`)
                    
    //             dispatch( {type: "resetForm"} )
    //         })
    //         .catch( err => {
    //             dispatch( {type: "updateValidations", payload: err.response.data } )
    //         })
    // }


    return(
        <>
            <div className="border border-dark border-3">
                <LoginForm />
                <p>
                    Don't have a login?
                    <NavButton btnText={"Register"} navigation={"/registration"} />
                </p>
            </div>
        
        </>
    )
}