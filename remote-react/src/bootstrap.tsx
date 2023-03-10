import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ReactStore } from '../@types/shared-store';
import { createMemoryRouter } from 'react-router-dom';
import routes from './routes/routes';

const mount = (
  mountPoint: HTMLElement,
  {
    store,
    history,
    basename = '/',
  }: {
    basename?: string;
    store?: ReactStore;
    history?: ReturnType<typeof createMemoryRouter>;
  } = {}
) => {
  const router = history || createMemoryRouter(routes, { basename });

  const root = createRoot(mountPoint);
  root.render(<App history={router} store={store} basename={basename} />);
};

export default { mount };
