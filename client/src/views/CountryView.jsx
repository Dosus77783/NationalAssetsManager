import { useEffect, useContext, useState } from "react";
import { userContext } from "../context/userContext";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCountry, getUserCountryById } from "../services/countryServices";
import { autoLogin } from "../services/userServices";
import NationNavBar from "../components/NationNavBar";
import NationStats from "../components/NationStats";

export default function CountryView(){
    const navigate = useNavigate();
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

    const deleteNation = ()=>{
        deleteCountry(id)
            .then( res => {
                console.log(res)
                navigate("/dashboard")
            })
            .catch( err => console.log("Inside deleteNation CATCH ---------", err ))
    }

    return(
        <>
            <NationNavBar />
            <NationStats data={ countryData } />
            <button className="btn btn-danger btn my-4 shadow" onClick={ () => deleteNation() } >Delete</button>
        </>
    )
}