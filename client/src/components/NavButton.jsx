import { useNavigate } from "react-router-dom"

export default function NavButton( { btnText, navigation, styleAdditons = "" } ){
    const navigate = useNavigate();

    return(
        <>
            <button id="navigationbtn" type="button" onClick={ () => navigate(navigation)} className={"shadow-lg active:scale-95 rounded-lg " + styleAdditons} >{btnText}</button>
        </>
    )
}