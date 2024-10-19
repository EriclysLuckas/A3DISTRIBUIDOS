import styleToMark from "./ToMark.module.css";


export default function name() {

  return (
    <div className={styleToMark.container}>

      <div className={styleToMark.h2}>
        <h2>Agendar Consultas</h2>
      </div>

      <div>
        <form className={styleToMark.box_container}>

           <div className={styleToMark.dhm}>
            <div className={styleToMark.calendar}>
            <label htmlFor="calendario"></label>
            <input type= "date" name="calendario"/> 
          </div>

          <div className={styleToMark.time}>
          <label htmlFor="hora"></label>
          <input type="time" name="hora"/>
          </div>

          <div className={styleToMark.list}>
           <label htmlFor="Medicos"></label>
            <select name="Medicos" id="bar">
              <option value="aleatorio"></option>
              <option value="aleatorio"></option>
              <option value="aleatorio"></option>
            </select>
    
          </div>

          <div className={styleToMark.button}>
            <button>Marcar</button>
          </div>

          

        
           </div>
          </form>
      </div>
    </div>




  );

    
    
  
 
}