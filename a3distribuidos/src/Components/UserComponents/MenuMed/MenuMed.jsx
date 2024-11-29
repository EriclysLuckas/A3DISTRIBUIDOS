import { useState, useEffect } from 'react';
import styleHomeUser from "./MenuMed.module.css";
import { Link } from 'react-router-dom';
import { FiX, FiMenu, FiChevronsLeft  } from "react-icons/fi";
import Header from '../../Header/Header';

export default function HomeMed() {
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
            {isOpen ? < FiX className={styleHomeUser.closeXMenu} /> : <FiMenu  className = {styleHomeUser.openMenu}/>}
          </button>
        </div>
      )}
      {(isOpen || !isMobile) && (
        <aside className={`${styleHomeUser.menuUser} ${isOpen ? styleHomeUser.opemMenu : ''}`}>
         
          {/* menu momentaneo */}
          <Link to="/med/cadpac" className={styleHomeUser.linkAside} onClick={toggleMenu}>Cadastrar Pac</Link>
          <Link to="/med/bulamedico" className={styleHomeUser.linkAside} onClick={toggleMenu}>Bula de Med</Link>
          <Link to="/med/agendamed" className={styleHomeUser.linkAside} onClick={toggleMenu}> Agendamentos Med</Link>
          <Link to="/med/medcid" className={styleHomeUser.linkAside} onClick={toggleMenu}>Cid tela de Med</Link>
          <Link to="/med/cadmedico" className={styleHomeUser.linkAside} onClick={toggleMenu}>Incluir Medico</Link>
          {/* <Link to="/med/medicamentos" className={styleHomeUser.linkAside} onClick={toggleMenu}>Medicamentos</Link> */}
          <Link to="/med/cid" className={styleHomeUser.linkAside} onClick={toggleMenu}>CID</Link>


        </aside>
      )}
      {(isMobile) && (

        <Header />
      )}




      <button className={styleHomeUser.logout}>
        <Link to ="/" className={styleHomeUser.link}><FiChevronsLeft /> LogOut</Link>
        
      </button>
    </section>
  );
}
