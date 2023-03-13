// App.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers,
  StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';
import { ReactStore, StoreShape } from '../@types/shared-store';
import { changeAppNameAction, reducers } from './reducer';

import './App.css';

const remoteAppScope = 'app1';

export declare type AppProps = {
  basename?: string;
  store?: ReactStore;
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

  useEffect(() => {
    if (store) {
      store.registerReducer({ ...reducers });
    }
  }, []);

  const getLocalStore = useCallback(
    () =>
      createStore(
        combineReducers({ ...reducers }),
        undefined,
        compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: unknown) => f
        ) as StoreEnhancer<unknown>
      ),
    []
  );

  return <Provider store={store || getLocalStore()}>{children}</Provider>;
};

export default AppDefault;

AppDefault.displayName = 'App1';
