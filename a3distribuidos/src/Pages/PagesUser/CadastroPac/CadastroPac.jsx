import styleCadastroPac from "./CadastroPac.module.css";
import Endereco from "../EndereçoPac/EnderecoPac";
import { useState } from "react";
import UseBaseContext from "../../../Hooks/UseBaseContext";

// Função para validar CPF
const validarCPF = (cpf) => {
  const regexCpf = /^(?:\d{3}\.){2}\d{3}-\d{2}$/;
  return regexCpf.test(cpf);
};



export default function CadastroPac() {
  const { novoPaciente } = UseBaseContext();

  const [cadEndereco, setCadEdereco] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    data_nascimento: '',
    endereco: '',  // Agora é uma string
    usuario_id: 'b222df61-c3eb-43f8-995e-2569bdfb9e7a',
  });
  const [errors, setErrors] = useState({
    cpf: '',
    telefone: '',
    endereco: '',
  });

  const toggleModalEndereco = () => {
    setCadEdereco((prevState) => !prevState);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Limpar o telefone para remover a máscara
    const telefoneLimpo = formData.telefone.replace(/\D/g, '');  // Remove tudo que não for número
  
    // Atualize o formData com o telefone limpo
    setFormData((prevData) => ({
      ...prevData,
      telefone: telefoneLimpo,
    }));
    
    console.log("FormData antes da validação:", formData);  // Verifique se o telefone está correto
  
    // Validação dos campos
    let formErrors = {};
  
    // Validar CPF
    if (!validarCPF(formData.cpf)) {
      formErrors.cpf = 'CPF inválido';
      alert("CPF inválido");

    }
  
  
    // Validar Endereço
    if (!formData.endereco || formData.endereco.trim() === "") {
      formErrors.endereco = 'Endereço é obrigatório';
      alert("Endereço é obrigatório");

    }
  
    setErrors(formErrors);
  
    // Verificando erros antes de submeter
    console.log("Erros encontrados:", formErrors);
  
    // Se não houver erros, enviar o formulário
    if (Object.keys(formErrors).length === 0) {
      console.log("Formulário válido, enviando dados...");
      console.log("Formulário enviado para o backend:", formData); 
      console.log("Formulário enviado para o backend:", formData); 
      alert("Paciente cadastrado com sucesso!");

      novoPaciente(formData);
    } else {
      console.log("Não enviar devido a erros.");
    }
  };
  return (
    <div className={styleCadastroPac.Selectioncontainer}>
      <form className={styleCadastroPac.box_container} onSubmit={handleSubmit}>
        <div className={styleCadastroPac.h2}>
          <h2>Cria conta</h2>
        </div>
        <div className={styleCadastroPac.register}>
          <div className={styleCadastroPac.bar}>
            <div className={styleCadastroPac.name}>
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Nome Completo"
                required
              />
            </div>

            <div className={styleCadastroPac.email}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>

            <div className={styleCadastroPac.cpf}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                maxLength={14}
                value={formData.cpf}
                onChange={handleInputChange}
                placeholder="000.000.000-00"
                required
              />
              {errors.cpf && <div className={styleCadastroPac.error}>{errors.cpf}</div>}
            </div>

            <div className={styleCadastroPac.number}>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                placeholder="(11) 98765-4321"
                required
              />
              {errors.telefone && <div className={styleCadastroPac.error}>{errors.telefone}</div>}
            </div>

            <div className={styleCadastroPac.date}>
              <label htmlFor="data_nascimento">Data de Nascimento</label>
              <input
                type="date"
                name="data_nascimento"
                value={formData.data_nascimento}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styleCadastroPac.buttonEndereco}>
              <button
                type="button"
                className={styleCadastroPac.btnEndereco}
                onClick={toggleModalEndereco}
              >
                + Endereço
              </button>
            </div>

            {cadEndereco && (
              <div className={styleCadastroPac.Endereco}>
                <Endereco
                  actionModal={toggleModalEndereco}
                  onEnderecoChange={handleEnderecoChange} // Passando a função para capturar o endereço
                />
              </div>
            )}

            {errors.endereco && <div className={styleCadastroPac.error}>{errors.endereco}</div>}

            <div className={styleCadastroPac.button}>
              <button type="submit" className={styleCadastroPac.btn}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
