import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { stateSetter } from '../../hmr.module';
import { routerReducer } from '@ngrx/router-store';
import * as fromProfile from '../reducers/profile.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  profile: fromProfile.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [stateSetter] : [];
