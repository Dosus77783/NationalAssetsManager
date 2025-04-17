import { useNavigate } from "react-router-dom";
import { deleteCountry } from "../services/countryServices";

export default function DeleteCountryButton( {id, style, reload } ){
    const navigate = useNavigate();
    const deleteButtonStyle = style + " shadow-lg active:scale-95 bg-red-800 transition-colors hover:bg-red-600 text-white rounded";

    const deleteNation = ()=>{
        deleteCountry(id)
            .then( res => {
                console.log(res)
                reload();
                navigate("/dashboard")
            })
            .catch( err => console.log("Inside deleteNation CATCH ---------", err ))
    }

    return(
        <>
            <button className={ deleteButtonStyle } onClick={ () => deleteNation() } >Delete</button>
        </>
    )
}