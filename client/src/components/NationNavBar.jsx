import { useNavigate, useParams } from "react-router-dom"
import NavButton from "./NavButton";

export default function NationNavBar(){
    const navigate = useNavigate();
    const { id } = useParams();

    return(
        <>
            <nav id="nationnavbar" className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-15 md:px-10 px-5 py-5 my-5 rounded-lg drop-shadow-xl col-start-2 col-span-4">
                <NavButton btnText={"Taxes"} navigation={"/country/settings/taxes/" + id} styleAdditons={"text-white/90"} />
                <NavButton btnText={"Spending"} navigation={"/country/settings/spending/" + id} styleAdditons={"text-white/90"} />
                <NavButton btnText={"Trade"} navigation={""} styleAdditons={"text-white/90"} />
                <NavButton btnText={"Development"} navigation={""} styleAdditons={"text-white/90"} />
            </nav>
        </>
    )
}