import { useEffect, useContext, useState } from "react";
import { userContext } from "../context/userContext";
import { useParams } from "react-router-dom";
import { getUserCountryById } from "../services/countryServices";
import { autoLogin } from "../services/userServices";
import NationNavBar from "../components/NationNavBar";
import NationStats from "../components/NationStats";

export default function CountryView(){
    const {user, setUser} = useContext(userContext);
    const [ countryData, setCountryData ] = useState( null );
    const { id } = useParams();

    useEffect( ()=>{
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

        getUserCountryById(id)
            .then( (res) => setCountryData(res) )
            .catch( (err) => console.log(err) )

    }, [])



    return(
        <>
            <NationNavBar />
            <NationStats data={ countryData } />
        </>
    )
}