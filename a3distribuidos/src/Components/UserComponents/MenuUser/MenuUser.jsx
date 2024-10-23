import  { useState, useEffect } from 'react';
import styleHomeUser from "./MenuUser.module.css";
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from "react-icons/fi";

export default function HomeUser() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Ajuste aqui o valor da largura

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth <= 900;
      setIsMobile(isCurrentlyMobile);
      // Define isOpen com base na largura da janela
      if (isCurrentlyMobile) {
        setIsOpen(false); 
      } else {
        setIsOpen(true); 
      }
    };

    // Adiciona o event listener para resize para monitorar a largura
    window.addEventListener('resize', handleResize);
    handleResize(); // Chama a função ao montar o componente
    return () => window.removeEventListener('resize', handleResize); // Limpeza do event listener
  }, []);

  return (
    <section className={`${styleHomeUser.SectionHomeUser} ${isOpen ? styleHomeUser.sectionOpen : ""}`}>
      {isMobile && (
        <button onClick={toggleMenu} className={styleHomeUser.toggleButton}>
          {isOpen ? < FiX className ={styleHomeUser.closeMenu}/> : <FiMenu  />}
          </button>
      )}
      {(isOpen || !isMobile) && (
        <aside className={styleHomeUser.menuUser}>
          <Link to="/agendar" className={styleHomeUser.linkAside}>Agendar Consulta</Link>
          <Link to="/minhaconsulta" className={styleHomeUser.linkAside}>Minhas Consultas</Link>
          <Link to="/medicamentos" className={styleHomeUser.linkAside}>Medicamentos</Link>
          <Link to="/cid" className={styleHomeUser.linkAside}>CID</Link>
        </aside>
      )}

    </section>
  );
}
