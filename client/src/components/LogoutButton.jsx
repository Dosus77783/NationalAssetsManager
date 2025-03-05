import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../services/userServices.js'

export default function LogoutButton(){
    const navigate = useNavigate

    const onLogOut = () =>{
        logoutUser()
            .then( res => navigate("/"))
            .catch( err => console.log(err, "in LogoutButton IN CATCH"))
    }

    return(
        <>
            <button type="button" onClick={ onLogOut }>Logout</button>
        </>
    )
}