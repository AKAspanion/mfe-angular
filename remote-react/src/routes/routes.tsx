import { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Page1 } from '../pages/Page1';
import { Page2 } from '../pages/Page2';
import { NotFound } from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'page-1',
        element: <Page1 />,
      },
      {
        path: 'page-2',
        element: <Page2 />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
