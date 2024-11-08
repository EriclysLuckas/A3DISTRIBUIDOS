import { useState, useEffect } from "react";

export default function useUtils() {


  // =====================  API CID ===============================


  const [base, setBase] = useState([]);                                          // Estado para armazenar os dados de cids

                                                                                 // Função para buscar dados de cids
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cids");
      const jsonCids = await response.json();
      console.log('Resposta da API:', jsonCids);                                  // Verifique aqui como os dados estão sendo retornados
      setBase(jsonCids);                                                          // Atualiza o estado com os dados da API
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setBase([]);                                                                // Se houver erro, define base como array vazio
    }
  };

  useEffect(() => {
    fetchData();
  }, []);                                                                         // A função fetchData é chamada apenas uma vez quando o componente for montado

                                                                                  // Função para adicionar um novo CID
  const addCid = async (newCid) => {
    try {
      await fetch("http://localhost:3000/api/cids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCid),                                             // Envia o CID no corpo da requisição
      });
      fetchData();                                                                // Recarrega os dados após adicionar o novo CID
    } catch (error) {
      console.error("Erro ao adicionar CID:", error);
    }
  };

  // Função para excluir um CID
  const deleteCid = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/cids/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData();                                                                // Recarrega os dados após excluir o CID
    } catch (error) {
      console.error("Erro ao excluir CID:", error);
    }
  };

                                                                                  // Função para obter um CID específico por ID
  const getCidById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cids/${id}`);
      const cid = await response.json();
      return cid;
    } catch (error) {
      console.error("Erro ao buscar CID por ID:", error);
    }
  };

  // Função para atualizar um CID
  const updateCid = async (id, updatedCid) => {
    try {
      await fetch(`http://localhost:3000/api/cids/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCid),                                         // Envia o CID atualizado
      });
      fetchData();                                                                // Recarrega os dados após a atualização do CID
    } catch (error) {
      console.error("Erro ao atualizar CID:", error);
    }
  };

                                                                                  // Função para alternar o status de favorito de um CID
  const toggleFavorite = async (cid) => {
    const updatedCid = { ...cid, isFavorite: !cid.isFavorite };

    try {
                                                                                  // Envia a alteração para o servidor
      await fetch(`http://localhost:3000/api/cids/${cid.code}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCid),                                         // Envia o CID atualizado
      });
      fetchData();                                                                // Atualiza a lista de CIDs após a alteração
    } catch (error) {
      console.error('Erro ao favoritar CID:', error);
    }
  };

                                                                                  // Retorna todas as funções e o estado
  return { base, addCid, deleteCid, getCidById, updateCid, toggleFavorite };
}
