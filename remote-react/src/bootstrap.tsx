import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory } from 'history';
import App from './App';
import { HistoryStrategy } from '../@types/shared-route';
import { ReactStore } from '../@types/shared-store';

const mount = (
  mountPoint: HTMLElement,
  {
    store,
    initialPathname,
    historyStrategy,
  }: {
    store?: ReactStore;
    initialPathname?: string;
    historyStrategy?: HistoryStrategy;
  } = {}
) => {
  const history =
    historyStrategy ||
    createMemoryHistory({
      initialEntries: [initialPathname || '/'],
    });

  const root = createRoot(mountPoint);
  root.render(<App history={history} store={store} />);
};

export default { mount };
