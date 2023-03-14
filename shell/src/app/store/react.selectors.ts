import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state;

export const selectReactAppName = createSelector(selectFeature, state => {
  return state?.react?.app?.appName || '-';
});

export const selectReactAppState = createSelector(selectFeature, state => {
  return state?.react ? { ...state?.react } : {};
});
