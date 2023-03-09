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

export type App1State = {
  appName: string;
};

export type ReducerMap = {
  app1?: Reducer;
};

export type StoreShape = {
  app1?: App1State;
};

export type ReactStore = Store<StoreShape> & {
  asyncReducers: ReducerMap;
  registerReducer: (reducers: ReducerMap) => void;
};
