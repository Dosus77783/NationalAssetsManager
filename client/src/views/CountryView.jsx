import { useEffect, useContext, useState } from "react";
import { userContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client"
import { getUserCountryById } from "../services/countryServices";
import { autoLogin } from "../services/userServices";
import NationNavBar from "../components/NationNavBar";
import NationStats from "../components/NationStats";
import DeleteCountryButton from "../components/DeleteCountryButton";

export default function CountryView(){
    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext);
    const [ countryData, setCountryData ] = useState( null );
    const { id } = useParams();
    const socket = io("")

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
            <DeleteCountryButton id={id} style={"col-start-5 justify-self-end my-5 w-30 text-lg "} />
        </>
    )
}