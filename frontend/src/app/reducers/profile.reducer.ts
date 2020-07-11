import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from '../actions/profile.actions';
import { Profile } from '../models/profile';

export const profileFeatureKey = 'profile';

export interface State {
  profile: Profile;
}

export const initialState: State = {
  profile: null,
};

export const reducer = createReducer(
  initialState,

  on(ProfileActions.setProfile, (state: State, prop) => {
    return {
      ...state,
      profile: prop.profile,
    };
  }),
);
