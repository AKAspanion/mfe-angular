import { ReduxAction, AppState, StoreShape } from '../../@types/shared-store';

const initialState: AppState = {
  appName: '',
};

const CHANGE_HOME_APP_NAME = 'CHANGE_HOME_APP_NAME';

// selectors
export const selectAppName = (state: StoreShape) => {
  return state?.app?.appName ?? '-';
};

export const selectInContainer = (state: StoreShape) => {
  return state?.app?.inContainer ?? false;
};

// actions
export const setAppName = (appName: string) => {
  return { type: CHANGE_HOME_APP_NAME, payload: appName };
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
  }
  return state;
};

export default appReducer;
