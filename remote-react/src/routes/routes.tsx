import { RouteObject } from 'react-router-dom';

import { NotFound } from '../pages/NotFound';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Page1 = lazy(() => import('../pages/Page1'));
const Page2 = lazy(() => import('../pages/Page2'));

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
            <Page1 />
          </Suspense>
        ),
      },
      {
        path: 'page-2',
        element: (
          <Suspense fallback="Loading...">
            <Page2 />
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
