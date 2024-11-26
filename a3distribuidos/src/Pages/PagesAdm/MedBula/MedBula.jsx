import styleMedBula from "./MedBula.module.css";

export default function MedBula() {
  return (
  
  <div className={styleMedBula.container}>

    {/* Parte da Esquerda */}
    <div className={styleMedBula.h1}>
      <h1>Bulas</h1>
    </div>

    <form className={styleMedBula.left_box}>
      <div className={styleMedBula.search}>
      <div className={styleMedBula.bar}>
          <input 
          type="text" 
          name="Buscar" 
          placeholder="Buscar"/>
        </div>
      </div>

        <div className={styleMedBula.category}>
          <select 
          name="categoria" 
          id="categoria" 
          placeholder="Categoria" 
          className={styleMedBula.category_list}>
            <option value="">Categoria</option>
          </select>
        </div>

        <div className={styleMedBula.button}>
          <button type="submit" className={styleMedBula.btn}>
            Buscar
          </button>
        </div>
      </form>

      <div>
        <p>oi</p>
      </div>

  </div>
    
    
   


  )

 
  
}