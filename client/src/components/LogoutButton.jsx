import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../services/userServices.js'
import { useContext } from 'react'
import { userContext } from '../context/userContext.jsx'

export default function LogoutButton(){
    const {user, setUser} = useContext(userContext);
    const navigate = useNavigate()

    const onLogOut = () =>{
        logoutUser()
            .then( res => {
                setUser({});
                navigate("/")
            })
            .catch( err => console.log(err, "in LogoutButton IN CATCH"))
    }

    return(
        <>
            <button type="button" onClick={ () => onLogOut() } className="w-20 shadow-lg text-lg active:scale-95 bg-red-800 transition-colors hover:bg-red-600 text-white rounded" >Logout</button>
        </>
    )
}