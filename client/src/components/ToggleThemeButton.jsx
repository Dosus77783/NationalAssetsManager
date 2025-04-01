import { useState, useEffect } from "react";

export function ToggleThemeButton(){
    const USER_MODE = localStorage.getItem("mode");
    const [mode, setMode] = useState(USER_MODE);
    const html = document.documentElement
    const isMode = mode === "dark";

    const toggleMode = () => {
        setMode( prev => prev === "light" ? "dark": "light" );
    }

    useEffect( ()=>{
        localStorage.setItem("mode", (mode || "light") )
        html.setAttribute("mode", localStorage.getItem("mode"))
    }, [mode])
    

    return(
        <div className="col-span-5 flex flex-wrap lg:justify-start justify-center mb-1.5 mx-2 ">
            <span className="mx-2">
                Light-Mode
            </span>
            <button 
                onClick={toggleMode} 
                className={`text-black relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 
                    ${isMode ? "bg-indigo-600":"bg-gray-400" } `}
            >
            <span 
                className={`inline-block h-4 w-4 transform transition-transform duration-300 rounded-full bg-white 
                ${isMode ? "translate-x-5":"translate-x-1"}`} 
            >
            </span>
            {/* {mode === "dark" ? "Light Mode": "Dark Mode"}  */}
            </button>
            <span className="mx-2">
                Dark-Mode
            </span>
        </div>
    )



}