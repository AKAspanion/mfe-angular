import type { StoreEnhancer, AnyAction } from 'redux';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import {
  ReactStore,
  ReducerMap,
  ReduxAction,
  StoreShape,
} from 'remote-react/@types/shared-store';

const middleware = [thunk];

const configureStore = (defaultState: StoreShape) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f: unknown) => f
        )
      : compose(applyMiddleware(...middleware));

  const store = legacy_createStore<StoreShape, AnyAction, unknown, unknown>(
    combineReducers({}),
    defaultState,
    enhancer as StoreEnhancer<unknown>
  ) as ReactStore;

  store.asyncReducers = {};

  const createRootReducer = (newReducers: ReducerMap) => {
    const appReducer = combineReducers(newReducers);

    return (
      state: ReturnType<typeof appReducer> | undefined,
      action: ReduxAction
    ) => {
      return appReducer(state, action);
    };
  };

  store.registerReducer = (newReducers: ReducerMap) => {
    store.asyncReducers = { ...store.asyncReducers, ...newReducers };

    store.replaceReducer(createRootReducer(store.asyncReducers));
  };

  return store;
};

const createStore = (defaultState: StoreShape) => {
  const store = configureStore(defaultState);

  store.subscribe(() => {
    const state = store.getState();
    console.log(state);
  });

  return store;
};

export default createStore;
