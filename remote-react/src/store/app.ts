import { ReduxAction, AppState, StoreShape } from '../../@types/shared-store';

const initialState: AppState = {
  appName: '',
  standalone: false,
};

const SET_APP_NAME = 'SET_APP_NAME';
const SET_APP_STATE = 'SET_APP_STATE';

// selectors
export const selectAppName = (state: StoreShape) => {
  return state?.app?.appName || '-';
};

export const selectIsStandalone = (state: StoreShape) => {
  console.log('selector', { state });
  return state?.app?.standalone;
};

// actions
export const setAppName = (appName: string) => {
  return { type: SET_APP_NAME, payload: appName };
};

export const setAppState = (appState?: AppState) => {
  return { type: SET_APP_STATE, payload: appState };
};

// reducer
const appReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case SET_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
    case SET_APP_STATE: {
      return { ...state, ...(action.payload || {}) };
    }
  }
  return state;
};

export default appReducer;
