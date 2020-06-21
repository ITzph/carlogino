import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromHome from './home.reducer';

export interface State {
  [fromHome.homeFeatureKey]: fromHome.State;
}

export const reducers: ActionReducerMap<State> = { [fromHome.homeFeatureKey]: fromHome.reducer };

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
