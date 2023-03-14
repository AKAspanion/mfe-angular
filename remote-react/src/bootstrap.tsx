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
  inContainer?: boolean;
  store?: ReactStore;
  history?: boolean;
};

const mount = (
  mountPoint: HTMLElement,
  {
    state = {},
    store,
    history,
    basename = '/',
    inContainer = false,
  }: ReactMount = {}
) => {
  const router = history
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes, { basename });

  console.log('React prop state', state);
  const newState = merge(structuredClone(state), {
    app: { inContainer },
    inContainer,
  });

  console.log('React state', newState);
  newState.app.inContainer = inContainer;
  newState.inContainer = inContainer;

  const storeProp = store ?? createStore(newState);

  storeProp.registerReducer({ ...reducers });

  const root = createRoot(mountPoint);

  root.render(<App history={router} store={storeProp} basename={basename} />);
};

export default { mount };
