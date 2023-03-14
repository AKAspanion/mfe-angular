import { createAction, props } from '@ngrx/store';

export const setVueStore = createAction('[Vue App] Set', props<any>());
