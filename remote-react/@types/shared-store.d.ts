import { compose, Store, Reducer } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
  }
}

export type ReduxAction = {
  type: string;
  payload?: unknown;
};

export type AppState = {
  appName?: string;
  inContainer?: boolean;
};

export type ReducerMap = {
  app?: Reducer;
};

export type StoreShape = {
  app?: AppState;
};

export type ReactStore = Store<StoreShape> & {
  asyncReducers: ReducerMap;
  registerReducer: (reducers: ReducerMap) => void;
};
