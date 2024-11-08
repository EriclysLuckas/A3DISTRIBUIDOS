import styleMedCid from "./MedCid.module.css"
import styleMedCidCad from "./MedCidCad.module.css"
import { FiXCircle  } from "react-icons/fi";
import useBaseContext from "../../../Hooks/useBaseContext";

import { useState } from "react";

export default function MedCid() {
    const [openTrue, setOpenTrue] = useState(false);  // Estado para controlar a visibilidade do modal
    const [searchTerm, setSearchTerm] = useState("");  // Estado para filtro de pesquisa
  
    const { base } = useBaseContext();  // Acessa o contexto com o estado `base` e a função `setBase`
  
    // Verifica se `base` está carregado
    if (!base) {
      return <p>Carregando...</p>;
    }
  
    const cids = base?.cids ?? [];  // Garante que estamos acessando a lista de CIDs
  
    // Lógica de filtro dos CIDs
    const filteredCids = cids
      .filter((cid) =>
        cid.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cid.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0));  // Ordena CIDs favoritos primeiro
  
   
  
    // Função para abrir o modal de cadastro
    const openCadCid = () => {
      setOpenTrue(true);  // Define o estado `openTrue` como `true` para abrir o modal
    };
  
    // Função para fechar o modal de cadastro
    const closeCadCid = () => {
      setOpenTrue(false);  // Define o estado `openTrue` como `false` para fechar o modal
    };
  
    return (
      <div className={styleMedCid.page}>
        <div className={styleMedCid.container}>
          <div className={styleMedCid.header}>
            <h1>CID</h1>
            <div className={styleMedCid.addCid}>
              {/* O modal de cadastro será aberto ao clicar nesse botão */}
              <button onClick={openCadCid}>Adicionar CID</button>
            </div>
          </div>
  
          {/* Modal de cadastro */}
          {openTrue && (
            <div className={styleMedCidCad.pageModal}>
              <div className={styleMedCidCad.containerModal}>
                <div className={styleMedCidCad.backButtonContainerModal}>
                  <FiXCircle onClick={closeCadCid} className={styleMedCidCad.closeModal} />
                </div>
                <h1>Cadastrar CID</h1>
                <form className={styleMedCidCad.formModal}>
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
  
          {/* Filtro de busca */}
          <div className={styleMedCid.searchContainer}>
            <div className={styleMedCid.inputWrapper}>
              <input
                type="text"
                placeholder="A00"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}  // Atualiza o termo de busca conforme o input
              />
              <svg className={styleMedCid.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44.856a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
              </svg>
            </div>
          </div>
  
          {/* Lista de CIDs */}
          <div className={styleMedCid.cidList}>
            {filteredCids.map((cid) => (
              <div key={cid.code} className={styleMedCid.cidItem}>
                <span className={styleMedCid.cidCode}>{cid.code}</span>
                <span className={styleMedCid.cidDescription}>{cid.description}</span>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  