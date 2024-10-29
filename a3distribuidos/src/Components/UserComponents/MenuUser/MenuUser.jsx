import { useState, useEffect } from 'react';
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
      const isCurrentlyMobile = window.innerWidth <= 1100;
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
        <div className={styleHomeUser.content}>

          <button onClick={toggleMenu} className={styleHomeUser.toggleButton}>
            {isOpen ? < FiX className={styleHomeUser.closeMenu} /> : <FiMenu  className = {styleHomeUser.openMenu}/>}
          </button>
        </div>
      )}
      {(isOpen || !isMobile) && (
        <aside className={`${styleHomeUser.menuUser} ${isOpen ? styleHomeUser.opemMenu : ''}`}>
          <Link to="/agendar" className={styleHomeUser.linkAside} onClick={toggleMenu}>Agendar Consulta</Link>
          <Link to="/minhaconsulta" className={styleHomeUser.linkAside} onClick={toggleMenu}>Minhas Consultas</Link>
          <Link to="/medicamentos" className={styleHomeUser.linkAside} onClick={toggleMenu}>Medicamentos</Link>
          <Link to="/cid" className={styleHomeUser.linkAside} onClick={toggleMenu}>CID</Link>
          
          {/* menu momentaneo */}
          <p> links momentaneos </p>
          <Link to="/cadpac" className={styleHomeUser.linkAside} onClick={toggleMenu}>Cadastrar clientes</Link>
          <Link to="/enderecopac" className={styleHomeUser.linkAside} onClick={toggleMenu}>Cadastrar endereço</Link>
          <Link to="/bulamedico" className={styleHomeUser.linkAside} onClick={toggleMenu}>Bula de Med</Link>
          <Link to="/agendamed" className={styleHomeUser.linkAside} onClick={toggleMenu}> Agendamentos Med</Link>
          <Link to="/medcid" className={styleHomeUser.linkAside} onClick={toggleMenu}>Cid tela de Med</Link>


        </aside>
      )}

    </section>
  );
}
