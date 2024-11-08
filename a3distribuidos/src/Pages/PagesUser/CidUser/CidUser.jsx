import { useState } from "react";
import styleCidUser from "./CidUser.module.css";
import styleCidCad from "./CidCad.module.css";
import { FiXCircle } from "react-icons/fi";
import useBaseContext from "../../../Hooks/useBaseContext";

export default function CidUser() {
  const [openTrue, setOpenTrue] = useState(false);  // Estado para controlar a visibilidade do modal
  const [searchTerm, setSearchTerm] = useState("");  // Estado para filtro de pesquisa

  const { base, setBase } = useBaseContext();  // Acessa o contexto com o estado `base` e a função `setBase`

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

  // Função para alternar o status de favorito
  const toggleFavorite = (index) => {
    const updatedCids = [...cids];  // Cria uma cópia da lista de CIDs
    const cidToToggle = updatedCids[index];  // Obtém o CID que será alterado

    // Verifica se o CID já é favorito e alterna seu estado
    cidToToggle.isFavorite = !cidToToggle.isFavorite;

    // Se favoritar, move para o topo
    if (cidToToggle.isFavorite) {
      updatedCids.splice(index, 1);  // Remove da posição original
      updatedCids.unshift(cidToToggle);  // Adiciona no topo
    }

    // Atualiza o estado do contexto com a lista modificada
    setBase({ cids: updatedCids });
  };

  // Função para abrir o modal de cadastro
  const openCadCid = () => {
    setOpenTrue(true);  // Define o estado `openTrue` como `true` para abrir o modal
  };

  // Função para fechar o modal de cadastro
  const closeCadCid = () => {
    setOpenTrue(false);  // Define o estado `openTrue` como `false` para fechar o modal
  };

  return (
    <div className={styleCidUser.page}>
      <div className={styleCidUser.container}>
        <div className={styleCidUser.header}>
          <h1>CID</h1>
          <div className={styleCidUser.addCid}>
            {/* O modal de cadastro será aberto ao clicar nesse botão */}
            <button onClick={openCadCid}>Adicionar CID</button>
          </div>
        </div>

        {/* Modal de cadastro */}
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

        {/* Filtro de busca */}
        <div className={styleCidUser.searchContainer}>
          <div className={styleCidUser.inputWrapper}>
            <input
              type="text"
              placeholder="A00"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}  // Atualiza o termo de busca conforme o input
            />
            <svg className={styleCidUser.searchIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85zm-5.44.856a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </div>
        </div>

        {/* Lista de CIDs */}
        <div className={styleCidUser.cidList}>
          {filteredCids.map((cid) => (
            <div key={cid.code} className={styleCidUser.cidItem}>
              <span className={styleCidUser.cidCode}>{cid.code}</span>
              <span className={styleCidUser.cidDescription}>{cid.description}</span>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
