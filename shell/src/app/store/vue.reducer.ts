import { createReducer, on } from '@ngrx/store';
import { setVueStore } from './vue.actions';

export const initialState = {};

export const vueReducer = createReducer(
  initialState,
  on(setVueStore, (state, d) => {
    return d[0];
  })
);
