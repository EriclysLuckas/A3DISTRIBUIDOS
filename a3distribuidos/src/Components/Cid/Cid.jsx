import styleCidUser from "../Cid/Cid.module.css";
import { useState } from "react";
import useBaseContext from "../../Hooks/useBaseContext";

export default function CidUser() {
  const [searchTerm, setSearchTerm] = useState("");  // Estado para filtro de pesquisa

  const { base } = useBaseContext(); //chama a base 

//Aqui será para evitar o erro de usar o base antes dele carregar
//incluindo essa consulta se base é verdadeiro 
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

 



  return (
    <div className={styleCidUser.page}>
      <div className={styleCidUser.container}>
        <div className={styleCidUser.header}>
          <h1>CID</h1>
         
        </div>

        
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
          {filteredCids.map((cid) => ( //aqui conseguimos dá um map para listar as cids podendo listar por div, lista, o tabela
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
