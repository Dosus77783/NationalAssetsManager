import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { ToggleThemeButton } from "./ToggleThemeButton";

export default function Layout(){

    return(
        <>
            <ToggleThemeButton />
            <NavigationBar />
            <Outlet />
        </>
    )
}