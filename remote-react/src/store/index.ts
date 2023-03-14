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
import { sleep } from '../utils';
import reducers from './reducer';

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

const createStore = async (defaultState: StoreShape) => {
  const store = configureStore(defaultState);
  console.log('defaultState', defaultState);

  store.registerReducer({ ...reducers });

  store.subscribe(() => {
    const state = store.getState();
    window.dispatchEvent(
      new CustomEvent('[remote-react] state sync', { detail: state })
    );
  });

  await sleep(200);

  return store;
};

export default createStore;
