import { useState } from "react";
import styleCadastroPac from "./CadastroMed.module.css";
import UseBaseContext from "../../../Hooks/UseBaseContext";
import EnderecoMed from "../EnderecoMed/EnderecoMed";


export default function CadastroMed() {
  const { novoMedico } = UseBaseContext();  // Supondo que você já tenha a função novoMedico no contexto
  const [cadEnderecoMed, setCadEderecoMed] = useState(false);

  
  
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    crm: "",
    especialidade: "",
    telefone:"",
    email: "",
    endereco_consultorio:"",

  });


  const toggleModalEndereco = () => {
    setCadEderecoMed((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEnderecoChange = (endereco) => {
    // Verificar se todos os campos necessários estão presentes no objeto `endereco`
    if (endereco && endereco.rua && endereco.numero && endereco.cidade && endereco.estado) {
      const enderecoString = `${endereco.rua}, ${endereco.numero}, ${endereco.cidade}, ${endereco.estado}`;
      setFormData((prevData) => ({
        ...prevData,
        endereco: enderecoString,  // Salvar o endereço como string
      }));
    } else {
      // Caso algum campo do endereço esteja ausente, podemos limpar ou não atualizar o campo
      setFormData((prevData) => ({
        ...prevData,
        endereco: '',  // Limpar o campo endereço
      }));
    }
  };


  



  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Adiciona o usuário_id fixo aos dados
    const dadosComUsuarioId = {
      ...formData,
      usuario_id: "b222df61-c3eb-43f8-995e-2569bdfb9e7a"
    };

    try {
      // Envia os dados para o contexto/endpoint (função novoMedico)
      const resposta = await novoMedico(dadosComUsuarioId);
      if (resposta.success) {
        console.log("Médico cadastrado com sucesso!", resposta.data);
        alert("Médico cadastrado com sucesso!")
      } else {
        console.error("Erro ao cadastrar médico", resposta.error);
        alert("Médico cadastrado com sucesso!")

      }
    } catch (error) {
      console.error("Erro ao enviar dados para cadastrar médico", error);
    }
  };

  return (
    <div className={styleCadastroPac.Selectioncontainer}>
      <form className={styleCadastroPac.box_container} onSubmit={handleSubmit}>
        <div className={styleCadastroPac.h2}>
          <h2>Cadastrar Médico</h2>
        </div>
            
        {cadEnderecoMed && (
              <div className={styleCadastroPac.EnderecoMed}>
                <EnderecoMed
                  actionModal={toggleModalEndereco}
                  onEnderecoChange={handleEnderecoChange} // Passando a função para capturar o endereço
                />
              </div>
            )}
        <div className={styleCadastroPac.register}>
          <div className={styleCadastroPac.bar}>
            <div className={styleCadastroPac.name}>
              <label htmlFor="Nome"></label>
              <input
                type="text"
                name="nome"
                placeholder="Nome Completo"
                value={formData.nome}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styleCadastroPac.cpf}>
              <label htmlFor="CPF"></label>
              <input
                type="text"
                name="cpf"
                maxLength={14}
                placeholder="000.000.000-00"
                value={formData.cpf}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styleCadastroPac.date}>
              <label htmlFor="crm"></label>
              <input
                type="text"
                name="crm"
                placeholder="crm"
                value={formData.dataNascimento}
                onChange={handleInputChange}
                required
              />
            </div>


            <div className={styleCadastroPac.especialidade}>
              <label htmlFor="Especialidade"></label>
              <input
                type="text"
                name="especialidade"
                placeholder="Especialidade"
                value={formData.especialidade}
                onChange={handleInputChange}
                required
              />
            </div>

           

            <div className={styleCadastroPac.number}>
              <label htmlFor="Telefone"></label>
              <input
                type="number"
                name="numero"
                placeholder="Telefone"
                value={formData.numero}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styleCadastroPac.email}>
              <label htmlFor="Email"></label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styleCadastroPac.buttonEnderecoMed}>
              <button
                type="button"
                className={styleCadastroPac.btnEnderecoMed}
                onClick={toggleModalEndereco}
              >
                + Endereço
              </button>
            </div>
        

            <div className={styleCadastroPac.button}>
              <button className={styleCadastroPac.btn}>Cadastrar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
