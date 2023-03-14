import { createSelector } from '@ngrx/store';

export const selectFeature = (state: any) => state;

export const selectVueAppName = createSelector(selectFeature, state => {
  return state?.vue?.appName ?? '-';
});

export const selectVueState = createSelector(selectFeature, state => {
  return state?.vue ?? {};
});
