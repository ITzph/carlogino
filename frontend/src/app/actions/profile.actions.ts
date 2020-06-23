import { createAction, props } from '@ngrx/store';

export enum ProfileAction {
  UpdateProfileName = '[Profile Action] Update',
}

export const updateProfileName = createAction(
  ProfileAction.UpdateProfileName,
  props<{ name: string }>(),
);
