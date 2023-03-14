import React from 'react';
import merge from 'lodash.merge';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ReactStore } from '../@types/shared-store';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import routes from './routes/routes';
import createStore from './store';
import reducers from './store/reducer';

type ReactMount = {
  state?: any;
  basename?: string;
  standalone?: boolean;
  history?: boolean;
};

const mount = (
  mountPoint: HTMLElement,
  { state = {}, history, basename = '/', standalone = false }: ReactMount = {}
) => {
  const router = history
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes, { basename });

  console.log('React prop state', state);
  const newState = merge(structuredClone(state), { app: { standalone } });

  console.log('React state', newState);

  (async () => {
    const store = await createStore(newState);

    createRoot(mountPoint).render(
      <App history={router} store={store} basename={basename} />
    );
  })();
};

export default { mount };
