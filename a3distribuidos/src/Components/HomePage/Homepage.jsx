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
      <img src="../../../home.png" alt="" />
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