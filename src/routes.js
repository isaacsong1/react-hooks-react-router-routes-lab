import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/movie/:title',
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: '/actors',
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: '/directors',
    element: <Directors />,
    errorElement: <ErrorPage />
  },
];

export default routes;