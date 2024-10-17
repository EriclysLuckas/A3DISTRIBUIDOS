import { createBrowserRouter } from 'react-router-dom';
import HomeUser from "./Pages/PagesUser/HomeUser/HomeUser.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />,
    children: [
      { index: true, element: <HomeUser /> },
      { path: "home", element: <HomeUser /> },




    ],
  },
]);

export default router;
