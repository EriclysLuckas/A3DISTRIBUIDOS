import React, { useState } from "react";
import styleMedBula from "./MedBula.module.css";

export default function MedBula() {
  // Dados de exemplo com links para PDFs
  const [bulas] = useState([
    { 
      codigo: "25115", 
      produto: "Amoxicilina", 
      categoria: "antibiotico", 
      pdf: "https://www.ems.com.br/arquivos/produtos/bulas/bula_amoxicilina_11037_1432.pdf" 
    },
    { 
      codigo: "36520", 
      produto: "Ibuprofeno", 
      categoria: "antiinflamatorio", 
      pdf: "https://www.ems.com.br/arquivos/produtos/bulas/bula_ibuprofeno_1471_1627.pdf" 
    },
    { 
      codigo: "47850", 
      produto: "Paracetamol", 
      categoria: "analgesico", 
      pdf: "https://www.ems.com.br/arquivos/produtos/bulas/bula_paracetamol_10162_1318.pdf" 
    },
    { 
      codigo: "56230", 
      produto: "Diclofenaco", 
      categoria: "antiinflamatorio", 
      pdf: "https://eurofarma.com.br/produtos/bulas/patient/pt/bula-astro-solucao-oral.pdf" 
    },
    { 
      codigo: "67540", 
      produto: "Azitromicina", 
      categoria: "antibiotico", 
      pdf: "https://eurofarma.com.br/produtos/bulas/patient/pt/bula-astro-solucao-oral.pdf" 
    },
  ]);

  // Estados para busca e categoria
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("");

  // Filtro dos medicamentos
  const filteredBulas = bulas.filter((bula) => {
    const matchesSearch =
      bula.codigo.includes(searchTerm) ||
      bula.produto.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      appliedCategory === "" || bula.categoria === appliedCategory;
    return matchesSearch && matchesCategory;
  });

  // Aplica a categoria ao clicar no botão de busca
  const handleSearch = (e) => {
    e.preventDefault();
    setAppliedCategory(selectedCategory);
  };

  return (
    <div className={styleMedBula.container}>
      {/* Parte da Esquerda */}
      <div className={styleMedBula.left_corner}>
        <div className={styleMedBula.h1}>
          <h1>Bulas</h1>
        </div>

        <form className={styleMedBula.left_box} onSubmit={handleSearch}>
          <div className={styleMedBula.search}>
            <div className={styleMedBula.bar}>
              <input
                type="text"
                name="Buscar"
                placeholder="Buscar por código ou produto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de busca
              />
            </div>
          </div>

          <div className={styleMedBula.category}>
            <select
              name="categoria"
              id="categoria"
              placeholder="Categoria"
              className={styleMedBula.category_list}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Atualiza a categoria temporariamente
            >
              <option value="">Todas as Categorias</option>
              <option value="antibiotico">Antibióticos</option>
              <option value="antiinflamatorio">Anti-inflamatórios</option>
              <option value="analgesico">Analgésicos</option>
            </select>
          </div>

          <div className={styleMedBula.button}>
            <button type="submit" className={styleMedBula.btn}>
              Buscar
            </button>
          </div>
        </form>
      </div>

      {/* Parte da Direita */}
      <div className={styleMedBula.right_corner}>
        <table className={styleMedBula.table}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Produto</th>
              <th>Bula</th>
            </tr>
          </thead>
        </table>
        <div className={styleMedBula.table_container}>
          <table className={styleMedBula.table}>
            <tbody>
              {filteredBulas.map((bula, index) => (
                <tr key={index}>
                  <td className={styleMedBula.cell}>{bula.codigo}</td>
                  <td className={styleMedBula.cell}>{bula.produto}</td>
                  <td className={styleMedBula.cell}>
                    <a
                      href={bula.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styleMedBula.download_btn}
                    >
                      ⬇
                    </a>
                  </td>
                </tr>
              ))}
              {filteredBulas.length === 0 && (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    Nenhum medicamento encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
