import styleHome from "../HomePage/Homepage.module.css";



import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate();

  const goToPaciente = () => {
    navigate('/paciente');
  };

  const goToMedico = () => {
    navigate('/med');
  };

  return (
    <div className={styleHome.containerHome}>
      <div className={styleHome.buttonsimg}>
      <img src="https://img.freepik.com/fotos-gratis/close-da-mao-da-enfermeira-do-homem-verificando-os-sintomas-da-doenca-na-area-de-transferencia-discutindo-o-tratamento-de-saude-com-o-medico-que-trabalha-no-escritorio-do-hospital-medico-afro-americano-analisando-documentos-medicos_482257-30444.jpg?t=st=1732836221~exp=1732839821~hmac=b677baa8f7f53a2fc9d9df54280bd680a8799481778cf1ee1cab57e14f9e54f5&w=740" alt="" />
      </div>
      <div className={styleHome.content}>

      <h1 className={styleHome.title}>Bem-vindo à Plataforma de Agendamento</h1>

      <div className={styleHome.buttonsContainer}>
        <button onClick={goToPaciente} className={styleHome.button}>Tela Paciente</button>
        <button onClick={goToMedico} className={styleHome.button}>Tela Médico</button>
      </div>
      </div>

    </div>
  );
}