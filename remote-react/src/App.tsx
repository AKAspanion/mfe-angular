// App.tsx
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppState, ReactStore } from '../@types/shared-store';
import { setAppState } from './store/app';

import './App.css';

export declare type AppProps = {
  store: ReactStore;
  basename?: string;
  newState?: AppState;
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
      <AppWithInit {...props}>
        <RouterProvider router={history} />
      </AppWithInit>
    </AppWithStore>
  );
};

const AppWithInit: React.FC<AppProps> = props => {
  const d = useDispatch();
  const { newState, children } = props;

  useEffect(() => {
    d(setAppState(newState || {}));
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

const AppWithStore: React.FC<AppProps> = props => {
  const { store, children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default AppDefault;

AppDefault.displayName = 'App1';
