import styles from "./AgendamentosMed.module.css";

export default function AgendamentosMed() {
    const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  
    const appointments = [
      { dayIndex: 0, patient: "Carlos Silva", time: "14:00" },
      { dayIndex: 1, patient: "Ana Pereira", time: "14:00" },
      { dayIndex: 2, patient: "Maria Souza", time: "11:00" },
      { dayIndex: 3, patient: "João Silva", time: "09:00" },
    ];
  
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
                  {appointments
                    .filter(appointment => appointment.dayIndex === index)
                    .map((appointment, idx) => (
                      <div key={idx} className={styles.appointment}>
                        <p className={styles.patientName}>{appointment.patient}</p>
                        <p className={styles.crm}>{appointment.crm}</p>
                        <p className={styles.time}>{appointment.time}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
    );
  }
  

  