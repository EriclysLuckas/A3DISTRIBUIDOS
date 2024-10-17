import styleHomeUser from "./HomeUser.module.css"
// import useBaseContext from "../../../Hooks/useBaseContext";
import {Link} from 'react-router-dom'



export default function HomeUser() {
  // const { base } = useBaseContext();

  return (
    <section className={styleHomeUser.SectionHomeUser}>
      <sidebar className = {styleHomeUser.menuUser}>
        <p > <Link to="/agendar">Agendar Consulta</Link></p>
        <p>Minhas Consultas</p>
        <p>Medicamentos</p>
        <p>CID</p>
        

      </sidebar>


    </section>
  )
}