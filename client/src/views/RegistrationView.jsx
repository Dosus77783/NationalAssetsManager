import { useState, useContext } from "react";
import { userContext } from "../context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import RegForm from "../components/RegForm.jsx";
import { registerUser } from '../services/userServices.js';

export default function RegistrationView(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();
    const REG_DEFAULT = { username: "", email:"", password:"", confirmPassword:"", valMsgs:{ validationErrors:{} } };
    const [regFormData, setRegFormData] = useState( REG_DEFAULT );

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setRegFormData( prevObj => ( {...prevObj, [name]:value, valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(regFormData, "in Registration FORM SUBMIT")
        registerUser( regFormData )
            .then( res => {
                navigate("/dashboard")
                setUser(res);
                setRegFormData( REG_DEFAULT )
            })
            .catch( err => {
                console.log(err, "in Registration IN CATCH")
                console.log(err.response.data, "in Registration IN DATA")
                setRegFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }

    return(
        <>
            <div className="w-75 mx-auto p-5 rounded shadow-lg bg-primary bg-opacity-50">
                <RegForm formData={regFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
            </div>
        </>
    )
}