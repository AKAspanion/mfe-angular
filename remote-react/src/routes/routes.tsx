import { RouteObject } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { lazy, Suspense } from 'react';

import Fallback from '../components/Fallback';

const Home = lazy(() => import('../pages/Home'));
const Sales = lazy(() => import('../pages/Sales'));
const Admin = lazy(() => import('../pages/Admin'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Fallback />}>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: 'page-1',
        element: (
          <Suspense fallback={<Fallback />}>
            <Sales />
          </Suspense>
        ),
      },
      {
        path: 'page-2',
        element: (
          <Suspense fallback={<Fallback />}>
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
