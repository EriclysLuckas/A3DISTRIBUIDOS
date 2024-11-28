import styles from "./MyQueriesUser.module.css";
import useBaseContext from "../../../Hooks/UseBaseContext";  // Certifique-se de que o hook de contexto está configurado corretamente.

export default function MyQueriesUser() {
  const { agendamentos, medicos } = useBaseContext();  // Supondo que 'medicos' vem do contexto com o id e nome
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  // Função para formatar a data para o dia da semana
  const getDayOfWeek = (date) => {
    const day = new Date(date).getDay(); // Pega o número do dia (0-6, sendo 0 = Domingo)
    return day === 0 ? 6 : day - 1; // Ajuste para Segunda (1) - Domingo (7)
  };

  // Função para obter o nome e CRM do médico a partir do ID
  const getMedicoInfo = (medicoId) => {
    const medico = medicos.find(m => m.id === medicoId);  // Busca o médico pelo ID
    if (medico) {
      return {
        nome: medico.nome,
        crm: medico.crm,  // Supondo que o CRM do médico está nesse campo
      };
    }
    return { nome: "Médico Desconhecido", crm: "CRM não disponível" };  // Caso não encontre, retorna valores padrão
  };

  return (
    <div className={styles.content}>
      <div className={styles.calendarWrapper}> 
        <h1 className={styles.title}>Minhas Consultas</h1>
        <div className={styles.calendar}>
          {daysOfWeek.map((day, index) => (
            <div key={index} className={styles.dayColumn}>
              <div className={styles.dayTitleContainer}>
                <p className={styles.dayTitle}>{day}</p>
              </div>
              {agendamentos
                .filter(appointment => getDayOfWeek(appointment.data_hora) === index) // Filtra pelo dia da semana
                .map((appointment, idx) => {
                  const { nome, crm } = getMedicoInfo(appointment.medico_id); // Obtendo o nome e CRM do médico
                  return (
                    <div key={idx} className={styles.appointment}>
                      <p className={styles.doctorName}>{nome}</p> {/* Nome do médico */}
                      <p className={styles.crm}>CRM: {crm}</p> {/* Exibindo o CRM do médico */}
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
