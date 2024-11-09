import { createBrowserRouter } from 'react-router-dom';
// import HomeUser from "./Components/UserComponents/HomeUser/HomeUser.jsx"
import ToMark from "./Pages/PagesUser/ToMark/ToMark.jsx";
import LayoutUser from './Pages/LayoutUser.jsx';
import MyQueriesUser from './Pages/PagesUser/MyQueriesUser/MyQueriesUser.jsx';
import Medicines from './Pages/PagesUser/Medicines/Medicines.jsx';
import CidUser from './Components/Cid/Cid.jsx';
import CadastroPac from "../src/Pages/PagesUser/CadastroPac/CadastroPac.jsx";
import Endereco from "../src/Pages/PagesUser/EndereçoPac/EndereçoPac.jsx";
import AgendamentosMed from "../src/Pages/PagesAdm/AgendamentosMed/AgendamentosMed.jsx"
import MedBula from "../src/Pages/PagesAdm/MedBula/MedBula.jsx"





const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      { index: true, element: <ToMark /> },
      {path: "agendar", element: <ToMark />},
      {path: "minhaconsulta", element: <MyQueriesUser />},
      {path: "medicamentos", element: <Medicines />},
      {path: "cid", element: <CidUser />},


      // rotas momentaneas 
      {path: "cadpac", element: <CadastroPac />},
      {path: "enderecopac", element: <Endereco />},
      {path: "bulamedico", element: <MedBula />},
      {path: "agendamed", element: <AgendamentosMed/>},
      {path: "medcid", element: <CidUser />},


    ],
  },
  {
    path: "/med",
    element: <LayoutUser />,
    children: [
      { index: true, element: <ToMark /> },
      {path: "agendar", element: <ToMark />},
      {path: "minhaconsulta", element: <MyQueriesUser />},
      {path: "medicamentos", element: <Medicines />},
      {path: "cid", element: <CidUser />},

    ],
  },
]);

export default router;
