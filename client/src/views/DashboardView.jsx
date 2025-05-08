import NavButton from "../components/NavButton"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../context/userContext"
import { useNavigate } from "react-router-dom";
import { autoLogin } from "../services/userServices";
import { getUserCountryDashboard } from "../services/countryServices";
import DeleteCountryButton from "../components/DeleteCountryButton";

export default function DashboardView(){
    const {user, setUser} = useContext(userContext);
    const [ countries, setCountries ] = useState( [] )
    const [ reload, setReload ] = useState(0);
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
    }, [reload])

    const reloadCountries = () => {
        setReload(prev => prev + 1);
    }

    return (
        <main className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center col-start-2 col-span-4 my-10">
            {
                countries.map( (elem, index) => (
                    <div key={index} className="w-full dashboard rounded-lg active:scale-95 grid grid-cols-3 ps-4 pe-2 pt-3 pb-1">
                        <button onClick={ () => navigate("/country/" + elem._id)} className="col-span-full overflow-auto w-full h-40 grid grid-cols-1 justify-items-start content-start text-start   "> 
                            <p className="m-0 mb-1 text-xl  font-bold tracking-widest" >{elem.countryName}</p>
                            <p className="my-1 dashcountries" > Government: {elem.government}</p>
                            <p className="my-1 dashcountries" > Status: {elem.difficulty}</p>
                        </button>
                        <DeleteCountryButton id={elem._id} style={"col-start-3 my-1"} reload={reloadCountries} />
                    </div>
                ))
            }
            <NavButton btnText={" + Create A Nation "} navigation={"/newnation"} styleAdditons={`w-full h-51 tracking-wide font-bold text-xl dashboard ${countries.length === 0 && "lg:col-start-2"}`} />
        </main>
    )
}