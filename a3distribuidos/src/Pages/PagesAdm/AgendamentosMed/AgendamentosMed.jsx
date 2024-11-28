import styles from "./AgendamentosMed.module.css";
import useBaseContext from "../../../Hooks/UseBaseContext";

export default function AgendamentosMed() {
  const { agendamentos, pacientes } = useBaseContext();
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  // Função para formatar a data para o dia da semana
  const getDayOfWeek = (date) => {
    const day = new Date(date).getDay(); // Pega o número do dia (0-6, sendo 0 = Domingo)
    return day === 0 ? 6 : day - 1; // Ajuste para Segunda (1) - Domingo (7)
  };

  // Função para obter o nome do paciente a partir do ID
  const getNomePaciente = (pacienteId) => {
    const paciente = pacientes.find(p => p.id === pacienteId);  // Busca o paciente pelo ID
    return paciente ? paciente.nome : "Paciente Desconhecido";  // Se encontrar, retorna o nome, senão "Desconhecido"
  };

  return (
    <div className={styles.content}>
      <div className={styles.calendarWrapper}> 
        <h1 className={styles.title}>Agendamentos</h1>
        <div className={styles.calendar}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.dayColumn}>
              <div className={styles.dayTitleContainer}>
                <p className={styles.dayTitle}>{day}</p>
              </div>
              {agendamentos
                .filter(appointment => getDayOfWeek(appointment.data_hora) === index) // Filtra pelo dia da semana
                .map((appointment, idx) => {
                  const nomePaciente = getNomePaciente(appointment.paciente_id); // Buscando o nome pelo ID do paciente
                  return (
                    <div key={idx} className={styles.appointment}>
                      <p className={styles.patientName}>{nomePaciente}</p> {/* Nome do paciente */}
                      <p className={styles.crm}>{appointment.crm}</p>
                      <p className={styles.time}>
                        {new Date(appointment.data_hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
