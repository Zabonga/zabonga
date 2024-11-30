import ListarTarefa from './pages/tarefa/ListarTarefa';
import CriarTarefa from './pages/tarefa/CriarTarefa';
import EditarTarefa from './pages/tarefa/EditarTarefa';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Navigate to="/tarefa" replace />
  },
  {
    path: '/tarefa',
    element: <ListarTarefa />
  },
  {
    path: '/tarefa/criar',
    element: <CriarTarefa />
  },
  {
    path: '/tarefa/editar/:id',
    element: <EditarTarefa />
  }
];

export default routes; 