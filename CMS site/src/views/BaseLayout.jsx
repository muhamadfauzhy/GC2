import { Outlet } from "react-router";
import Navbar from "../components/navBar";

export default function BaseLayout () {
    return(
        <>
            <Navbar/> 
            <Outlet/>
        </>
    )
}