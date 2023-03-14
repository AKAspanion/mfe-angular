import { ReduxAction, AppState, StoreShape } from '../../@types/shared-store';

const initialState: AppState = {
  appName: '',
  standalone: false,
};

const CHANGE_HOME_APP_NAME = 'CHANGE_HOME_APP_NAME';
const CHANGE_STANDALONE = 'CHANGE_STANDALONE';

// selectors
export const selectAppName = (state: StoreShape) => {
  return state?.app?.appName || '-';
};

export const selectIsStandalone = (state: StoreShape) => {
  return state?.app?.standalone;
};

// actions
export const setAppName = (appName: string) => {
  return { type: CHANGE_HOME_APP_NAME, payload: appName };
};

export const setIsStandalone = (standalone?: boolean) => {
  return { type: CHANGE_STANDALONE, payload: standalone };
};

// reducer
const appReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case CHANGE_HOME_APP_NAME: {
      return {
        ...state,
        appName: action.payload,
      };
    }
    case CHANGE_STANDALONE: {
      return {
        ...state,
        standalone: action.payload,
      };
    }
  }
  return state;
};

export default appReducer;
