import { Action, createReducer, on } from '@ngrx/store';

export const homeFeatureKey = 'home';

export interface State {
  name: string;
}

export const initialState: State = {
  name: 'gino',
};

export const reducer = createReducer(initialState);
