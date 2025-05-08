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
    const SERVER_PORT = import.meta.env.VITE_SERVER_PORT;

    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext);
    const [ allCountryData, setAllCountryData ] = useState( { countryData:null, oldCountryData:null } );
    const [ reload, setReload ] = useState(0);
    const [ activeUI, setActiveUI ] = useState(false);
    const { id } = useParams();

    const visualStatusChange = () => {
        setTimeout( ()=> setActiveUI(true), 50)
        setTimeout( ()=> setActiveUI(false), 15000)
    }
    
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
                return;
            })
        }

        const socket = io("http://localhost:" + SERVER_PORT);        
        socket.on( "country-cronjob:" + id, () => {
            setAllCountryData( prev => ( {...prev, oldCountryData:prev.countryData} ) )
            setReload(prev => prev + 1);
            visualStatusChange();
        });
        console.log("Once-------------------Test")
        return () => {
            socket.off("country-cronjob" + id, ()=> console.log("Disconnected" + allCountryData.countryData.countryName));
        }
    }, [])

    useEffect(()=>{
        console.log("Should Repeat-------------------" + reload)
        getUserCountryById(id)
            .then( (res) => setAllCountryData(prev => ({ ...prev, countryData:res }) ) )
            .catch( (err) => console.log(err) )
    }, [reload])

    return(
        <>
            <NationNavBar />
            <NationStats data={ allCountryData.countryData } oldData={ allCountryData.oldCountryData } ui={activeUI} />
            { allCountryData && <DeleteCountryButton id={id} style={"col-start-5 justify-self-end my-5 w-30 text-lg "} />}
        </>
    )
}