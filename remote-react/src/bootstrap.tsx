import React from 'react';
import merge from 'lodash.merge';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import routes from './routes/routes';
import createStore from './store';

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

  const newState = merge(structuredClone(state), { app: { standalone } });

  const store = createStore(newState);

  createRoot(mountPoint).render(
    <App
      store={store}
      history={router}
      basename={basename}
      newState={newState?.app}
    />
  );
};

export default { mount };
