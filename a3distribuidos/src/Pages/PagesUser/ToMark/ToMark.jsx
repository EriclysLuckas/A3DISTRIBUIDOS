import styleToMark from "./ToMark.module.css";
import UseBaseContext from "../../../Hooks/UseBaseContext";
import { useState } from "react";

export default function ToMark() {

  const { medicos,novaConsulta } = UseBaseContext(); 

  const [formAgendamento, setFormAgendamento] = useState({
    paciente_id: "", 
    medico_id: "",
    data: "", 
    hora: "", 
    notificacao_paciente: true,
    notificacao_medico: true,
  });

  // Função para lidar com as mudanças de input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormAgendamento((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Validação de data e hora
    if (!formAgendamento.data || !formAgendamento.hora) {
      console.error("Data e hora são obrigatórios.");
      return;
    }
  
    // Concatenando data e hora
    const data_hora = `${formAgendamento.data}T${formAgendamento.hora}:00`; // Formato: YYYY-MM-DDTHH:mm:ss
  
    // Criando os dados da consulta
    const consultaData = {
      paciente_id: "3c9fde91-d4fb-4e2a-a152-436012ab4c79",  // Exemplo de paciente_id
      medico_id: formAgendamento.medico_id,
      data_hora: data_hora,
      notificacao_paciente: formAgendamento.notificacao_paciente,
      notificacao_medico: formAgendamento.notificacao_medico,
    };
  
    // Chama a função novaConsulta
    const result = await novaConsulta(consultaData);
  
    // Verifica se a consulta foi agendada com sucesso
    if (result.success) {
      console.log("Consulta agendada com sucesso!");
      alert("Consulta agendada com sucesso!");
      setFormAgendamento({
        paciente_id: "", 
        medico_id: "",
        data: "", 
        hora: "", 
        notificacao_paciente: true,
        notificacao_medico: true,
      })
    } else {
      console.error("Erro ao agendar consulta:", result.error);
      alert("Houve um erro ao tentar agendar a consulta. Tente novamente.");
    }
  };

  return (
    <div className={styleToMark.Sectioncontainer}>
      <form onSubmit={onSubmit} className={styleToMark.box_container}>
        <div className={styleToMark.h2}>
          <h2>Agendar Consulta</h2>
        </div>

        <div className={styleToMark.dhm}>
          <div className={styleToMark.bar}>
            <div className={styleToMark.calendar}>
              <label htmlFor="data">Data</label>
              <input
                type="date"
                name="data"
                value={formAgendamento.data}
                onChange={handleChange}
              />
            </div>

            <div className={styleToMark.time}>
              <label htmlFor="hora">Hora</label>
              <input
                type="time"
                name="hora"
                value={formAgendamento.hora}
                onChange={handleChange}
              />
            </div>

            <div className={styleToMark.list}>
              <label htmlFor="medico_id">Médico</label>
              <select
                name="medico_id"
                value={formAgendamento.medico_id}
                onChange={handleChange}
                className={styleToMark.box_list}
              >
                <option value="">Selecione um Médico</option>
                {medicos && medicos.length > 0 ? (
                  medicos.map((medico) => (
                    <option key={medico.id} value={medico.id}>
                      {medico.nome}
                    </option>
                  ))
                ) : (
                  <option disabled>Não há médicos disponíveis</option>
                )}
              </select>
            </div>
          </div>


          <div className={styleToMark.button}>
            <button type="submit" className={styleToMark.btn}>
              Agendar Consulta
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}