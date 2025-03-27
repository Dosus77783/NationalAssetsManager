import { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import NavButton from "./NavButton";
import { useLocation, useParams } from "react-router-dom";

export function NavigationBar(){
    const DEFAULT_SETTINGS = {
        backNavigation: "/",
        showBackBtn: false,
        showLogoutBtn: false
    }
    const { id } = useParams();
    const location = useLocation()
    const [ navSettings, setNavSettings ] = useState( DEFAULT_SETTINGS )
    
    useEffect( ()=> {

        if( location.pathname.includes("/country/settings/") ){ 
            
            setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: true, backNavigation: "/country/" + id }) ) 

        }else if(location.pathname.includes("/dashboard") ){
            
            setNavSettings( prevObj => ({ ...prevObj, showBackBtn: false, showLogoutBtn: true }) )
            
        }else if(location.pathname.includes("/country/") ){

            setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: true, backNavigation:"/dashboard" }) )

        }else if(location.pathname.includes("/registration") || location.pathname.includes("/newnation") ){
            
            setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: false, backNavigation: "/"  }) )

        }else{
            setNavSettings( DEFAULT_SETTINGS )
        }
        
        console.log("NAVBAR IN USE EFFECT ---------------------")
    }, [location.pathname])

    return(
    <div className="flex flex-wrap justify-evenly items-center px-5 py-2 col-span-5 bg-blue-100 rounded-xs border-4 border-blue-50 border-double drop-shadow-md" >
        <div className="w-20 ">{ navSettings.showBackBtn  && <NavButton btnText={"Back"} navigation={ navSettings.backNavigation } styleAdditons="w-20" /> }</div>
        <h1 className="text-center py-4 text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-blue-300 to-sky-900" >NATIONAL ASSETS MANAGER</h1>
        <div className="w-20">{ navSettings.showLogoutBtn  && <LogoutButton /> }</div>
    </div>
    )
}
