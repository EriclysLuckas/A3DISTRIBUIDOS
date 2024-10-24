import styles from "./MyQueriesUser.module.css";

export default function MyQueriesUser() {
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  const appointments = [
    { dayIndex: 0, doctor: "Dr Péricles Silva", crm: "CRM: 123456/7", time: "09:00" },
    { dayIndex: 0, doctor: "Dr Ana Silva", crm: "CRM: 765432/1", time: "11:00" },
    { dayIndex: 0, doctor: "Dr Kuririn", crm: "CRM: 453535/4", time: "14:00" },
    { dayIndex: 1, doctor: "Dr João Pereira", crm: "CRM: 987654/3", time: "14:00" },
  ];

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
                {appointments
                  .filter(appointment => appointment.dayIndex === index)
                  .map((appointment, idx) => (
                    <div key={idx} className={styles.appointment}>
                      <p className={styles.doctorName}>{appointment.doctor}</p>
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
