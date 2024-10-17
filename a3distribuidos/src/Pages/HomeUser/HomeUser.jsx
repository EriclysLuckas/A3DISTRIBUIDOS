import styleHomeUser from "./HomeUser.module.css"
import useBaseContext from "../../../Hooks/useBaseContext";



export default function HomeUser() {
  const { base } = useBaseContext();

  return (
    <section className={styleHomeUser.SectionHomeUser}>

      {console.log(base)}

      <p>teste</p>

    </section>
  )
}