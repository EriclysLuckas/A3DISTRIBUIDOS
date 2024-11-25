import styles from './EnderecoMed.module.css';
import { FiX } from "react-icons/fi";
import { useState } from "react";
import PropTypes from 'prop-types';
export default function AddressForm({ actionModal, onEnderecoChange }) {

   

    const [enderecoMed, setEnderecoMed] = useState({
        rua: "",
        numero: "",
        cidade: "",
        estado: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEnderecoMed((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // Verifique os valores antes de enviar para o componente pai
        console.log("Endereco submetido:", enderecoMed);

        // Passe o objeto do endereço para o componente pai
        onEnderecoChange(enderecoMed);

        // Fechar o modal
        actionModal();
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.closeModal}>
                <FiX onClick={actionModal} />
            </div>
            <h2 className={styles.formTitle}>Formulário de Endereço</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="rua" className={styles.label}>Rua</label>
                <input
                    type="text"
                    id="rua"
                    name="rua"
                    className={styles.inputField}
                    placeholder="Adicione a Rua"
                    value={enderecoMed.rua}
                    onChange={handleChange}
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
                    value={enderecoMed.numero}
                    onChange={handleChange}
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
                    value={enderecoMed.cidade}
                    onChange={handleChange}
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
                    value={enderecoMed.estado}
                    onChange={handleChange}
                />
            </div>
          

            <button type="button" className={styles.submitButton} onClick={handleSubmit}>Cadastrar</button>
        </div>
    );
}

// Corrigindo a tipagem das props
AddressForm.propTypes = {
    actionModal: PropTypes.func.isRequired, // Ação para alternar o modal (função)
    onEnderecoChange: PropTypes.func.isRequired,  // Função para passar os dados de endereço para o pai
};
