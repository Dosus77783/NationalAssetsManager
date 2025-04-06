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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center col-start-2 col-span-4 my-10">
            {
                countries.map( (elem, index) => (
                    <button key={index} onClick={ () => navigate("/country/" + elem._id)} className="dashboard overflow-auto w-full h-40 grid grid-cols-1 justify-items-start content-start text-start px-5 pt-3 shadow-lg active:scale-95 rounded-lg "> 
                        <p className="m-0 mb-1 text-xl  font-bold tracking-widest" >{elem.countryName}</p>
                        <p className="my-1 dashcountries" > Government: {elem.government}</p>
                        <p className="my-1 dashcountries" > Status: {elem.difficulty}</p>
                    </button>
                ))
            }
        </div>
        <NavButton btnText={"+ Create A Nation"} navigation={"/newnation"} styleAdditons="absolute bottom-0 justify-self-center w-60 tracking-wide font-bold text-xl" />
        </>
    )
}