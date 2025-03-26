import { useNavigate } from "react-router-dom"

export default function NavButton( { btnText, navigation, styleAdditons = "" } ){
    const navigate = useNavigate();

    return(
        <>
            <button type="button" onClick={ () => navigate(navigation)} className={"my-auto shadow-lg text-lg bg-black hover:bg-slate-700 text-white rounded-xs " + styleAdditons} >{btnText}</button>
        </>
    )
}