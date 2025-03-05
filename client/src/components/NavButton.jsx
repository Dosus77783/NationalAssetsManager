import { useNavigate } from "react-router-dom"

export default function NavButton( { btnText, navigation } ){
    const navigate = useNavigate();

    return(
        <>
            <button type="button" onClick={ () => navigate(navigation)}>{btnText}</button>
        </>
    )
}