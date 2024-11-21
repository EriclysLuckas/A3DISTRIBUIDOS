import styles from './EndereçoPac.module.css';

export default function AddressForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        form.submit();
    };

    return (
        <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Formulário de Endereço</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="cep" className={styles.label}>CEP</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        className={styles.inputField}
                        placeholder="Adicione o CEP"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="logradouro" className={styles.label}>Logradouro</label>
                    <input
                        type="text"
                        id="logradouro"
                        name="logradouro"
                        className={styles.inputField}
                        placeholder="Adicione o Logradouro"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="bairro" className={styles.label}>Bairro</label>
                    <input
                        type="text"
                        id="bairro"
                        name="bairro"
                        className={styles.inputField}
                        placeholder="Adicione o Bairro"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="cidade" className={styles.label}>Cidade</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        className={styles.inputField}
                        placeholder="Adicione a Cidade"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="estado" className={styles.label}>Estado</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        className={styles.inputField}
                        placeholder="Adicione o Estado"
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="numero" className={styles.label}>Número</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        className={styles.inputField}
                        placeholder="Adicione o Número"
                    />
                </div>

                <button type="submit" className={styles.submitButton}>Cadastrar</button>
            </form>
        </div>
    );
};
