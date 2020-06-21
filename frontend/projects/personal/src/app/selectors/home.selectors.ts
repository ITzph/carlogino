import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

export const selectHomeFeature = createFeatureSelector<fromHome.State>('home');

export const selectHomeName = createSelector(
  selectHomeFeature,
  (state: fromHome.State) => state.name,
);
