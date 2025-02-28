import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import PortifolioPage from './pages/portifoliopage.jsx';
import MateriaPage from './pages/materiapage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'portifolio',
    element: <PortifolioPage />,
  },
  {
    path: 'materia',
    element: <MateriaPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);