import styleCadastroPac from "./CadastroPac.module.css";


export default function CadastroPac() {
  return(
    <div className={styleCadastroPac.Selectioncontainer}>

      <form className={styleCadastroPac.box_container}>
        <div className={styleCadastroPac.h2}>
            <h2>Cria conta</h2>
        </div>
            <div className={styleCadastroPac.register}>
              <div className={styleCadastroPac.bar}>

                <div className={styleCadastroPac.name}>
                  <label htmlFor="Nome"></label>
                  <input type="text" name="nome" placeholder="Nome Completo" required/>
                </div>
                
                <div className={styleCadastroPac.email}>
                  <label htmlFor="Email"></label>
                  <input type="email" name="email" placeholder="Email" required/>
                </div>

                <div className={styleCadastroPac.cpf}>
                  <label htmlFor="CPF"></label>
                  <input type="text" name="cpf" maxLength={14} placeholder="000.000.000-00" onInput={this} required/>
                </div>

                <div className={styleCadastroPac.number}>
                  <label htmlFor="Telefone"></label>
                  <input type="number" name="numero"  placeholder="Telefone" required/>
                </div>

                <div className={styleCadastroPac.date}>
                  <label htmlFor="Data de Nascimento"></label>
                  <input type="text" name="Data de Nascimento" placeholder="Data de Nascimento" required/>
                </div>
                <div className={styleCadastroPac.especialidade}>
                  <label htmlFor="Especialidade"></label>
                  <input type="text" name="Especialidade" placeholder="Especialidade" required/>
                </div>

                <div className={styleCadastroPac.button}>
                  <button className={styleCadastroPac.btn}>Cadastrar</button>
                </div>
              </div>
              </div>

      </form>
    </div>
  
  
  )


}