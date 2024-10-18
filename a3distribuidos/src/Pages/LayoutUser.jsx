
import { Outlet } from "react-router"
import MenuUser from "../Components/UserComponents/MenuUser/MenuUser"
import styleLayout from "./LayoutUser.module.css"

export default function LayoutUser() {
    return(
        <section className={styleLayout.SectionLayout}>
             <MenuUser />
             <Outlet />
        </section>
    )
}