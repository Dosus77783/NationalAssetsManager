import { useNavigate } from "react-router-dom"

export default function NavButton( { btnText, navigation } ){
    const navigate = useNavigate();

    return(
        <>
            <button type="button" onClick={ () => navigate(navigation)} className="btn btn-lg btn-dark shadow-sm my-auto px-4" >{btnText}</button>
        </>
    )
}