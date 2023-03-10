import { RouteObject } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Sales = lazy(() => import('../pages/Sales'));
const Admin = lazy(() => import('../pages/Admin'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback="Loading...">
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: 'page-1',
        element: (
          <Suspense fallback="Loading...">
            <Sales />
          </Suspense>
        ),
      },
      {
        path: 'page-2',
        element: (
          <Suspense fallback="Loading...">
            <Admin />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
