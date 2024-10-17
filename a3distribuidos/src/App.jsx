import { BaseProvider } from "./Context/BaseContext.jsx";
import { RouterProvider } from 'react-router-dom'; // Importa o RouterProvider para gerenciar as rotas
import router from './routes';

function App() {

  return (
    <BaseProvider>
    <RouterProvider router={router} />
    </BaseProvider>
  )
}

export default App
