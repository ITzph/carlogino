import { createAction, props } from '@ngrx/store';

export const updateHomeName = createAction('[Home] Update Name', props<{ name: string }>());
