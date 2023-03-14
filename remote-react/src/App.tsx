// App.tsx
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ReactStore } from '../@types/shared-store';

import './App.css';

export declare type AppProps = {
  basename?: string;
  store: ReactStore;
  history: ReturnType<typeof createBrowserRouter>;
  children?: React.ReactNode;
};

const AppDefault: React.FC<AppProps> = props => {
  return <AppWithRoute {...props} />;
};

const AppWithRoute: React.FC<AppProps> = props => {
  const { history } = props;

  useEffect(() => {
    history.subscribe(({ location: { pathname } }) => {
      window.dispatchEvent(
        new CustomEvent('[remote-react] navigated', { detail: pathname })
      );
    });

    const shellNavigationHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      history.navigate(pathname);
    };

    window.addEventListener('[shell-react] navigated', shellNavigationHandler);
    window.dispatchEvent(new CustomEvent('[remote-react] mounted'));

    return () => {
      window.removeEventListener(
        '[shell-react] navigated',
        shellNavigationHandler
      );
    };
  }, []);

  return (
    <AppWithStore {...props}>
      <RouterProvider router={history} />
    </AppWithStore>
  );
};

const AppWithStore: React.FC<AppProps> = props => {
  const { store, children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default AppDefault;

AppDefault.displayName = 'App1';
