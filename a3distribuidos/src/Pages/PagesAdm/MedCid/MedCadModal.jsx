import { useState } from "react";
import styleMedCiCad from "../MedCid/MedCidCad.module.css"
import { FiXCircle  } from "react-icons/fi";
import useBaseContext from "../../../Hooks/useBaseContext";

export default function MedCadModal({closeCadCid }){

const {addCid} = useBaseContext()



   const [medPostCid, setMedPostCid] = useState({
    codigo:"" ,
    cid:"" ,
    desc:"",

   });

   const handleChange = (e) =>{
  const {  name, value} = e.target
  setMedPostCid({
    ...medPostCid,
    [name]: value, // Atualiza o campo específico
  });

 
   }
   const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    try {


        console.log("CID CADASTRADO")
    //   // Envia o novo CID via POST
      await addCid(medPostCid);
      setMedPostCid({
        codigo: "",
        cid: "",
        desc: "",
      }); // Limpa o formulário após o envio
    } catch (error) {
      console.error("Erro ao adicionar CID:", error);
    }
  };
    return(
        <div className={styleMedCiCad.pageModal}>
        <div className={styleMedCiCad.containerModal}>
          <div className={styleMedCiCad.backButtonContainerModal}>
            <FiXCircle onClick={closeCadCid } className={styleMedCiCad.closeModal} />
          </div>
          <h1>Cadastrar CID</h1>
          <form onSubmit={handleSubmit} className={styleMedCiCad.formModal} >
            <label htmlFor="codigo">Código</label>
            <input type="text" id="codigo" name="codigo" placeholder="Insira o código" value={medPostCid.codigo}  onChange={handleChange} />
            <label htmlFor="cid">CID</label>
            <input type="text" id="cid10" name="cid" placeholder="Insira o CID" value ={medPostCid.cid} onChange={handleChange} />
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" name="desc" placeholder="Descrição" value={medPostCid.desc} onChange={handleChange}></textarea>
            <button type="submit" >Cadastrar</button>
          </form>
        </div>
      </div>
    )


}