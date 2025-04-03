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
            <div id="homepage" className="py-5 px-20 my-5 rounded-3xl drop-shadow-xl col-start-3 col-span-2">
                <LoginForm formData={loginFormData} onFormChange={ onFormChange } formSubmition={ formSubmition } />
                <p className="grid grid-cols-3 text-lg my-10 items-center border-slate-800">
                    <span className="col-span-2" >Don't have a login?</span>
                    <NavButton btnText={"Register"} navigation={"/registration"} styleAdditons="col-start-3 py-1 w-30 tracking-wide font-bold text-xl bg-registerbtn transition-colors hover:bg-slate-800 border border-slate-700 " />
                </p>
            </div>
        </>
    )
}