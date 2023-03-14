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
    standalone = false,
  }: ReactMount = {}
) => {
  const router = history
    ? createBrowserRouter(routes)
    : createMemoryRouter(routes, { basename });

  console.log('React prop state', state);
  const newState = merge(structuredClone(state), {
    app: { standalone },
    standalone,
  });

  console.log('React state', newState);
  newState.app.standalone = standalone;
  newState.standalone = standalone;

  const storeProp = store ?? createStore(newState);

  storeProp.registerReducer({ ...reducers });

  const root = createRoot(mountPoint);

  root.render(<App history={router} store={storeProp} basename={basename} />);
};

export default { mount };
