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
      <img src="https://img.freepik.com/fotos-gratis/assistente-medico-a-ajudar-um-doente-idoso_482257-83795.jpg?t=st=1732811460~exp=1732815060~hmac=b7097b0b7b14369bc430cfad2e39c8532ce99b53be88a192a6ff7b156e6988cd&w=740" alt="" />
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