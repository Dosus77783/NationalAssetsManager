import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { autoLogin, loginUser } from '../services/userServices.js';
import { userContext } from "../context/userContext.jsx";
import LoginForm  from "../components/LoginForm";
import NavButton from "../components/NavButton";

export default function HomePageView(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();
    const LOGIN_DEFAULT = { email:"", password:"", valMsgs:{ validationErrors:{} } };
    const [loginFormData, setLoginFormData] = useState( LOGIN_DEFAULT );

    useEffect( () => {

        if(Object.keys(user).length === 1 ){
            navigate("/dashboard") 
        }

        autoLogin()
        .then( (res) => {
            setUser(res)
            navigate("/dashboard")
            return;
        } )
        .catch( (err) => console.log(err))

    }, [])

    
    const onFormChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData( prevObj => ( {...prevObj, [name]:value, valMsgs:{ validationErrors:{} }  } ))
    }

    const formSubmition = (e) => {
        e.preventDefault();
        console.log(loginFormData, "in HomePageView FORM SUBMIT")
        loginUser( loginFormData )
            .then( res => {
                console.log(res)
                setUser(res);
                setLoginFormData( LOGIN_DEFAULT )
                navigate("/dashboard")
            })
            .catch( err => {
                console.log(err, "in HomePageView IN CATCH")
                console.log(err.response.data, "in HomePageView IN DATA")
                setLoginFormData( prevObj => ({...prevObj, valMsgs: err.response.data, }) );
            });
    }


    return(
        <>
            <div id="homepage" className="grid grid-cols-1 justify-items-center py-5 px-7 my-5 rounded-3xl drop-shadow-xl col-start-2 col-span-3">
                <LoginForm formData={loginFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
                <p className="w-25 self-center text-center font-bold text-lg">
                    Don't have a login?
                    <NavButton btnText={"Register"} navigation={"/registration"} styleAdditons="w-full py-1 font-normal" />
                </p>
            </div>
        </>
    )
}