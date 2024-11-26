import styleMedBula from "./MedBula.module.css";

export default function MedBula() {
  return(
    <div className={styleMedBula.container}>
      <form className={styleMedBula.box_container}>
        <div className={styleMedBula.h1}>
          <h1>Bulas</h1>
        </div>

        <div className={styleMedBula.search}>
          <input type="text" name="Buscar" placeholder="Buscar" />
        </div>

        <div className={styleMedBula.list}>
          <label htmlFor="">Categoria</label>
          <select name="categoria" id="categoria" placeholder="Categoria">
            <option value="">Não a Categoria</option>
          </select>
        </div>

        <div className={styleMedBula.button}>
          <button type="submit" className={styleMedBula.btn}>
            Buscar
          </button>
        </div>

      </form>
    </div>
  )
  
}