import { Footer } from "../components/Footer"
import {NavbarAvellano} from "../components/NavbarAvellano"
import { Outlet } from "react-router"

export const GlobalTerrenosLayout = () => {  

    return (
        <div className="min-h-screen">
            <NavbarAvellano />
            <Outlet/>
            <Footer />

        </div>
    )
}