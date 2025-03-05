import LogoutButton from "./LogoutButton";
import NavButton from "./NavButton";
import { useLocation } from "react-router-dom";

export function NavigationBar( { heading } ){
    const navigate = useNavigate();

    return(
    <div >
        <NavButton btnText={"Back"} navigation={""} />
        <h1>Simulation Nation</h1>
        <LogoutButton />
    </div>
    )
}
