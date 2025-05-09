import { useState, useEffect } from "react";

export default function useUtils() {


  // =====================  API CID ===============================

  const [agendamentos, setAgendamentos] = useState([]);  
  const [base, setBase] = useState([]);                                          // Estado para armazenar os dados de cids
  const [medicos, setMedicos] = useState([]); 
  const [pacientes, setPacientes ] = useState([]); 
  
  
  
  const [medicoId, setMedicoId] = useState('48851ec2-f0d8-482f-8a02-ddf72860b9f0');  // Substitua pelo ID real do médico ou obtenha-o do contexto
  // Estado para armazenar os dados de cids
  // Estado para armazenar dados de clínicas
  // Função para buscar dados de cids
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/cids");
      const jsonCids = await response.json();
      // console.log('Resposta da API:', jsonCids);                                  // Verifique aqui como os dados estão sendo retornados
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

         
  //================================= API CLINICA =================================  
  
  const fetchMedicos = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/medicos");

    if (!response.ok) {  // Verifica se a resposta foi bem-sucedida
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();
    setMedicos(data);  // Atualiza o estado com dados de médicos
  } catch (error) {
    console.error("Erro ao buscar médicos:", error);
    setMedicos([]);  // Caso ocorra erro, limpa o estado
  }
};

useEffect(() => {
  fetchData();  // Carrega os dados de CIDs
  fetchMedicos();  // Carrega os dados de médicos
}, []);











  
const novoMedico = async (consultaData) => {
  try {
    const response = await fetch("http://localhost:4000/api/medicos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(consultaData),
    });

    // Verifica se a resposta foi bem-sucedida (status HTTP 2xx)
    if (response.ok) {
      const responseData = await response.json();
      console.log("Consulta agendada com sucesso!", responseData);
      return { success: true, data: responseData };  // Retorna sucesso com dados
    } else {
      const errorData = await response.json();
      console.error("Erro ao enviar os dados:", errorData);
      return { success: false, error: errorData }; // Retorna erro com dados de erro
    }
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    return { success: false, error: error.message || error };  // Retorna erro com dados do erro
  }
};
 
const getWeekRange = () => {
  const today = new Date();
  const firstDayOfWeek = today.getDate() - today.getDay() + 1; // Segunda-feira
  const lastDayOfWeek = firstDayOfWeek + 6; // Domingo
  
  const startOfWeek = new Date(today.setDate(firstDayOfWeek));
  const endOfWeek = new Date(today.setDate(lastDayOfWeek));

  return { startOfWeek, endOfWeek };
};


//============================ AGENDAMENTOS =========================
const fetchAgendamentos = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/agendamentos");

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();

    // Obter o intervalo da semana atual
    const { startOfWeek, endOfWeek } = getWeekRange();

    // Filtrar agendamentos para a semana atual e pelo ID do médico
    const agendamentosFiltrados = data.filter((agendamento) => {
      const agendamentoDate = new Date(agendamento.data_hora); // Data do agendamento
      return (
        agendamento.medico_id === medicoId && 
        agendamentoDate >= startOfWeek && 
        agendamentoDate <= endOfWeek
      );
    });

    setAgendamentos(agendamentosFiltrados); // Atualiza o estado com os agendamentos filtrados
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    setAgendamentos([]); // Caso ocorra erro, limpa o estado
  }
};
useEffect(() => {
  fetchData();  // Carrega os dados de CIDs
  fetchMedicos();  // Carrega os dados de médicos
  fetchAgendamentos()
}, [medicoId]);
  
const novaConsulta = async (consultaData) => {
  try {
    const response = await fetch("http://localhost:4000/api/agendamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(consultaData),
    });

    // Verifica se a resposta foi bem-sucedida (status HTTP 2xx)
    if (response.ok) {
      const responseData = await response.json();
      console.log("Consulta agendada com sucesso!", responseData);
      return { success: true, data: responseData };  // Retorna sucesso com dados
    } else {
      const errorData = await response.json();
      console.error("Erro ao enviar os dados:", errorData);
      return { success: false, error: errorData }; // Retorna erro com dados de erro
    }
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    return { success: false, error: error.message || error };  // Retorna erro com dados do erro
  }
};
 

  
  //============================ PACIENTES =========================

  const fetchPacientes = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/pacientes");
  
      if (!response.ok) {  // Verifica se a resposta foi bem-sucedida
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setPacientes(data);  // Atualiza o estado com dados de médicos
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
      setPacientes([]);  // Caso ocorra erro, limpa o estado
    }
  
  };
    useEffect(() => {
      fetchPacientes();  // Carrega os pacientes
    }, []);

  const novoPaciente = async (consultaData) => {
    try {
      const response = await fetch("http://localhost:4000/api/pacientes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultaData),
      });
  
      // Verifica se a resposta foi bem-sucedida (status HTTP 2xx)
      if (response.ok) {
        const responseData = await response.json();
        console.log("Paciente cadastrado  com sucesso!", responseData);
        return { success: true, data: responseData };  // Retorna sucesso com dados
      } else {
        const errorData = await response.json();
        console.error("Erro ao enviar os dados:", errorData);
        return { success: false, error: errorData }; // Retorna erro com dados de erro
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      return { success: false, error: error.message || error };  // Retorna erro com dados do erro
    }
    
  };
  useEffect(() => {
    fetchPacientes();  // Carrega os pacientes
  }, []);
  
  // Retorna todas as funções e o estado
  return { base, addCid, deleteCid, getCidById, updateCid, toggleFavorite,medicos, novaConsulta,agendamentos,fetchPacientes,pacientes,novoPaciente, novoMedico};
}
