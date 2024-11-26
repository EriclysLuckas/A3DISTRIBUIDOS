
import { Outlet } from "react-router"
import MenuMed from "../Components/UserComponents/MenuMed/MenuMed"
import styleLayout from "./LayoutUser.module.css"

export default function LayoutUser() {
    return(
        <section className={styleLayout.SectionLayout}>
             <MenuMed />  
              <Outlet />
        </section>
    )
}