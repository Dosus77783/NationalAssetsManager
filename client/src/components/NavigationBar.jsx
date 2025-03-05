import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import NavButton from "./NavButton";
import { useLocation, useParams } from "react-router-dom";

export function NavigationBar(){
    const DEFAULT_SETTINGS = {
        backNavigation: "/",
        withSettings: "",
        withId: "",
        showBackBtn: false,
        showLogoutBtn: false
    }
    const location = useLocation()
    const { id } = useParams();
    const [ navSettings, setNavSettings ] = useState( DEFAULT_SETTINGS )
    
    useEffect( ()=> {
        if( location.pathname.includes("/country/settings/") ){ setNavSettings( prevObj => ({ ...prevObj, withSettings: location.pathname }) ) 
        }else if(location.pathname.includes("/country/")){ setNavSettings( prevObj => ({ ...prevObj, withId: location.pathname }) ) }
        
        console.log("NAVBAR IN USE EFFECT ---------------------")
        switch(location.pathname){
            case "/":
                setNavSettings( () => DEFAULT_SETTINGS )
                break;
            case "/registration":
            case "/newnation" :
                setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: false, backNavigation: "/"  }) )
    
                break;
            case "/dashboard": 
            case navSettings.withId:
                
                setNavSettings( prevObj => ({ ...prevObj, showBackBtn: false, showLogoutBtn: true }) )
                break;
            case navSettings.withSettings:
                setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: true, backNavigation: "/country/" + id }) )
                break;
            default:
                setNavSettings( () => DEFAULT_SETTINGS )
        }
    }, [location.pathname])
    
    return(
    <div >
        { navSettings.showBackBtn && <NavButton btnText={"Back"} navigation={ navSettings.backNavigation } /> }
        <h1>Simulation Nation</h1>
        { navSettings.showLogoutBtn && <LogoutButton /> }
    </div>
    )
}
