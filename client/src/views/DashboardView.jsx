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
        <>
            {
                countries.map( (elem, index) => (
                    <button key={index} onClick={ () => navigate("/country/" + elem._id)}> 
                        <p>{elem.countryName}</p>
                        <p>{elem.government}</p>
                        <p>{elem.difficulty}</p>
                    </button>
                ))
            }
            <NavButton btnText={"+ Create A Nation"} navigation={"/newnation"} />
        </>
    )
}