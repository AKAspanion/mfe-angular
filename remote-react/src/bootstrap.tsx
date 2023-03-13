import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ReactStore } from '../@types/shared-store';
import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import routes from './routes/routes';
import createStore from './store';
import reducers from './store/reducer';

type ReactMount = {
  basename?: string;
  inContainer?: boolean;
  store?: ReactStore;
  history?: boolean;
};

const mount = (
  mountPoint: HTMLElement,
  { store, inContainer, history, basename = '/' }: ReactMount = {}
) => {
  const router = history
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes, { basename });

  const storeProp =
    store ?? createStore({ app: { appName: 'ReactApp', inContainer } });

  storeProp.registerReducer({ ...reducers });

  const root = createRoot(mountPoint);

  root.render(<App history={router} store={storeProp} basename={basename} />);
};

export default { mount };
