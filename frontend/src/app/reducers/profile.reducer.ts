import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.actions';

export const profileFeatureKey = 'profile';

export interface State {
  name: string;
}

export const initialState: State = {
  name: 'Carlo Gino',
};

export const reducer = createReducer(
  initialState,

  on(ProfileActions.updateProfileName, (state: State, prop) => {
    return {
      ...state,
      name: prop.name,
    };
  }),
);
