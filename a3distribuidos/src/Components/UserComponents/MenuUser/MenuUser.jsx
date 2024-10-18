import styleHomeUser from "./MenuUser.module.css"
// import useBaseContext from "../../../Hooks/useBaseContext";
import {Link} from 'react-router-dom'



export default function HomeUser() {
  // const { base } = useBaseContext();

  return (
    <section className={styleHomeUser.SectionHomeUser}>
      <aside className = {styleHomeUser.menuUser}>
        <p > <Link to="/agendar" className={styleHomeUser.linkAside}>Agendar Consulta</Link></p>
        <p > <Link to={"/minhaconsulta"} className={styleHomeUser.linkAside}>Minhas Consultas</Link></p>
        <p> <Link to={"/medicamentos"} className={styleHomeUser.linkAside}>Medicamentos</Link></p>
        <p> <Link to={"/cid"} className={styleHomeUser.linkAside}>CID</Link></p>      
      </aside>


    </section>
  )
}