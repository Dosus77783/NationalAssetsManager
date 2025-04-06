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
            
            const isNewNationView = location.pathname.includes("/newnation");
            const homeOrDashboard = isNewNationView ? "/dashboard" : "/";
            setNavSettings( prevObj => ({ ...prevObj, showBackBtn: true, showLogoutBtn: isNewNationView, backNavigation: homeOrDashboard  }) )

        }else{
            setNavSettings( DEFAULT_SETTINGS )
        }
        
        console.log("NAVBAR IN USE EFFECT ---------------------")
    }, [location.pathname])

    return(
    <div id="navbar" className="flex flex-wrap justify-evenly items-center px-5 py-1 col-span-full" >
        <div className="w-20 lg:m-0 md:mb-3 mb-3">{ navSettings.showBackBtn  && <NavButton btnText={"Back"} navigation={ navSettings.backNavigation } styleAdditons="w-20" /> }</div>
        <p id="namheading" className="text-center text-5xl font-bold font-sans tracking-widest" >NATIONAL ASSETS MANAGER</p>
        <div className="w-20 lg:m-0 md:mt-4 mt-4">{ navSettings.showLogoutBtn  && <LogoutButton /> }</div>
    </div>
    )
}
