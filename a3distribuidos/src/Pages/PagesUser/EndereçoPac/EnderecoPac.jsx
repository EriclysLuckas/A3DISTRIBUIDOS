import styles from './EnderecoPac.module.css';
import { FiX } from "react-icons/fi";
import { useState } from "react";
import PropTypes from 'prop-types';

export default function AddressForm({ actionModal}) {
    const [endereco, setEndereco] = useState({
        bairro: "",
        cidade: "",
        estado: "",
        numero: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEndereco((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.closeModal}><FiX onClick ={actionModal} /></div>
            <h2 className={styles.formTitle}>Formulário de Endereço</h2>

            <div className={styles.inputGroup}>
                <label htmlFor="bairro" className={styles.label}>Bairro</label>
                <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    className={styles.inputField}
                    placeholder="Adicione o Bairro"
                    value={endereco.bairro}
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
                    value={endereco.cidade}
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
                    value={endereco.estado}
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
                    value={endereco.numero}
                    onChange={handleChange}
                />
            </div>

            <button type="button" className={styles.submitButton} onClick={actionModal}>Cadastrar</button>
        </div>
    );
}

// Corrigindo a tipagem das props
AddressForm.propTypes = {
    actionModal: PropTypes.func.isRequired, // Ação para alternar o modal (função)
};
