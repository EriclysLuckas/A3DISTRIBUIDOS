import { createBrowserRouter } from 'react-router-dom';
// import HomeUser from "./Components/UserComponents/HomeUser/HomeUser.jsx"
import ToMark from "./Pages/PagesUser/ToMark/ToMark.jsx";
import LayoutUser from './Pages/LayoutUser.jsx';
import MyQueriesUser from './Pages/PagesUser/MyQueriesUser/MyQueriesUser.jsx';
import Medicines from './Pages/PagesUser/Medicines/Medicines.jsx';
import CidUser from './Pages/PagesUser/CidUser/cidUser.jsx';
import CadastroPac from "../src/Pages/PagesUser/CadastroPac/CadastroPac.jsx";
import EnderecoPac from "../src/Pages/PagesUser/EnderecoPac/EnderecoPac.jsx";

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
      {path: "enderecopac", element: <EnderecoPac />},
   


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
