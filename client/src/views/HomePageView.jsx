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
            <div id="homepage" className="lg:px-15 md:px-10 px-5 py-5 my-5 rounded-3xl drop-shadow-xl lg:col-start-3 lg:col-span-2 md:col-start-2 md:col-span-4 col-start-2 col-span-4">
                <LoginForm formData={loginFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
                <p className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 text-lg my-10 items-center border-slate-800">
                    <span className="col-span-2 mx-auto text-center" >Don't have a login?</span>
                    <NavButton btnText={"Register"} navigation={"/registration"} styleAdditons="lg:col-start-3 md:col-start-3 mx-auto py-1 w-30 tracking-wide font-bold text-xl " />
                </p>
            </div>
        </>
    )
}