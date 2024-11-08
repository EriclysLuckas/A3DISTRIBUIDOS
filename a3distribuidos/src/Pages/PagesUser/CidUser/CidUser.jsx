import { useState } from "react";
import styleCidUser from "./CidUser.module.css";
import styleCidCad from "./CidCad.module.css";
import { FiXCircle  } from "react-icons/fi";
import useBaseContext from "../../../Hooks/useBaseContext";







export default function CidUser() {
    const [openTrue, setOpenTrue] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
  
    const {base} = useBaseContext(); 

    if (base === null) {
      return <p>Carregando...</p>;  
    }
  
    const cids = base?.cids ?? [];  
  
    // Handle search filtering
    const filteredCids = cids
      .filter((cid) =>
        cid.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cid.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));  // Ordenar por favorito
  
    // Toggle favorite status
    const toggleFavorite = async (index) => {
      const updatedCids = [...cids];
      const cidToToggle = updatedCids[index];
      cidToToggle.isFavorite = !cidToToggle.isFavorite;
  
      // Se favoritar, move para o topo
      if (cidToToggle.isFavorite) {
        updatedCids.splice(index, 1); // Remove da posição atual
        updatedCids.unshift(cidToToggle); // Adiciona no topo
      }
  
      // Atualiza o estado com a lista modificada
      setOpenTrue(updatedCids);
  
      // Enviar a alteração para a API (se necessário)
      try {
        await fetch(`http://localhost:3000/api/cids/${cidToToggle.code}`, {
          method: 'PUT',  // Atualizar a entrada do CID
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cidToToggle),  // Envia o CID atualizado
        });
      } catch (error) {
        console.error('Erro ao atualizar favorito:', error);
      }
    };
  
    const openCadCid = () => {
      setOpenTrue(true);
      console.log("teste");
    };
  
    const closeCadCid = () => {
      setOpenTrue(false);
    };
  
    return (
      <div className={styleCidUser.page}>
        <div className={styleCidUser.container}>
          <div className={styleCidUser.header}>
            <h1>CID</h1>
            <div className={styleCidUser.addCid}>
              <button onClick={openCadCid}>Adicionar CID</button>
            </div>
          </div>
  
          {openTrue && (
            <div className={styleCidCad.pageModal}>
              <div className={styleCidCad.containerModal}>
                <div className={styleCidCad.backButtonContainerModal}>
                  <FiXCircle onClick={closeCadCid} className={styleCidCad.closeModal} />
                </div>
                <h1>Cadastrar CID</h1>
                <form className={styleCidCad.formModal}>
                  <label htmlFor="codigo">Código</label>
                  <input type="text" id="codigo" name="codigo" placeholder="Insira o código" />
                  <label htmlFor="cid10">CID</label>
                  <input type="text" id="cid10" name="cid10" placeholder="Insira o CID" />
                  <label htmlFor="descricao">Descrição</label>
                  <textarea id="descricao" name="descricao" placeholder="Descrição"></textarea>
                  <button type="submit">Cadastrar</button>
                </form>
              </div>
            </div>
          )}
  
          <div className={styleCidUser.searchContainer}>
            <div className={styleCidUser.inputWrapper}>
              <input
                type="text"
                placeholder="A00"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className={styleCidUser.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44.856a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
              </svg>
            </div>
          </div>
  
          <div className={styleCidUser.cidList}>
            {filteredCids.map((cid, index) => (
              <div key={cid.code} className={styleCidUser.cidItem}>
                <span className={styleCidUser.cidCode}>{cid.code}</span>
                <span className={styleCidUser.cidDescription}>{cid.description}</span>
                <button
                  className={styleCidUser.favoriteButton}
                  onClick={() => toggleFavorite(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1.5l1.224 3.773h3.973l-3.208 2.327 1.224 3.773L8 9.272l-3.213 2.327 1.224-3.773L2.803 5.273h3.973L8 1.5z" fill={cid.isFavorite ? "gold" : "black"} />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }