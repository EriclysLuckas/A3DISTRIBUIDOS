import { createBrowserRouter } from 'react-router-dom';
import HomeUser from "./Pages/PagesUser/HomeUser/HomeUser.jsx"
import ToMark from "../src/Components/ToMark/ToMark.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
    children: [
      { index: true, element: <HomeUser /> },
      { path: "home", element: <HomeUser /> },
      {path: "agendar", element: <ToMark />}




    ],
  },
]);

export default router;
