import { createReducer, on } from '@ngrx/store';
import { setReactStore } from './react.actions';

export const initialState = {};

export const reactReducer = createReducer(
  initialState,
  on(setReactStore, (state, d) => {
    return d[0];
  })
);
