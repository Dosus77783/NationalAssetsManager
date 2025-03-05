import NavButton from "../components/NavButton"
import { useContext, useEffect } from "react"
import { userContext } from "../context/userContext"
import { useNavigate } from "react-router-dom";

export default function DashboardView(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate();
    console.log(user)

    useEffect( () => {
        if(Object.keys(user).length === 0 ){
            navigate("/") 
        }
    }, [])


    return (
        <>
            <NavButton btnText={"+ Create A Nation"} navigation={"/newnation"} />
        </>
    )
}