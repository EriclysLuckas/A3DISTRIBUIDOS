import styles from './Medicines.module.css';
import UseBaseContext from "../../../Hooks/UseBaseContext";

export default function Medicines() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        form.submit();
    };
    const { pacientes } = UseBaseContext();


    return (
        <div className={styles.formWrapper}>

            <h2 className={styles.formTitle}>Receitar Medicamento</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="paciente" className={styles.label}>Paciente</label>
                    <select
                        id="paciente"
                        name="paciente"
                        className={styles.selectField}
                    >
                        <option value="">Selecione um paciente</option>
                        {pacientes.map((pacientes)=>(
                            <option key={pacientes.id} value={pacientes.id}>
                                {pacientes.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="medicamento" className={styles.label}>Medicamento</label>
                    <input
                        type="text"
                        id="medicamento"
                        name="medicamento"
                        className={styles.inputField}
                        placeholder="Adicione um Medicamento"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="observacoes" className={styles.label}>Observações</label>
                    <textarea
                        id="observacoes"
                        name="observacoes"
                        className={styles.textareaField}
                        placeholder="Adicione uma observação"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Receitar</button>
            </form>
        </div>
    );
};
