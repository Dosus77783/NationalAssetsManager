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
            <button type="button" onClick={ () => onLogOut() } className="btn btn-lg btn-primary shadow-sm my-auto px-3" >Logout</button>
        </>
    )
}