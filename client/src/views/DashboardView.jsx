import NavButton from "../components/NavButton"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/userContext"
import { useNavigate } from "react-router-dom";
import { autoLogin } from "../services/userServices";
import { getUserCountryDashboard } from "../services/countryServices";

export default function DashboardView(){
    const {user, setUser} = useContext(userContext);
    const [ countries, setCountries ] = useState( [] )
    const navigate = useNavigate();
    console.log(user)

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


        getUserCountryDashboard()
            .then( (res) => {
                setCountries( res.countries );
            })
    }, [])

    return (
        <div className="d-flex flex-column w-75 mx-auto">
            {
                countries.map( (elem, index) => (
                    <button key={index} onClick={ () => navigate("/country/" + elem._id)} className="btn btn-lg btn-dark my-3"> 
                        <p className="font-monospace fs-4 m-0 text-decoration-underline" >{elem.countryName}</p>
                        <p className="fs-6 m-0" >Government: {elem.government}</p>
                        <p className="fs-6 m-0" >Status: {elem.difficulty}</p>
                    </button>
                ))
            }
            <NavButton btnText={"+ Create A Nation"} navigation={"/newnation"} />
        </div>
    )
}