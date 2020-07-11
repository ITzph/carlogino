import { createAction, props } from '@ngrx/store';
import { Profile } from '../models/profile';

export enum ProfileAction {
  SetProfile = '[Profile] Set',
}

export const setProfile = createAction(ProfileAction.SetProfile, props<{ profile: Profile }>());
