import { Action, createReducer, on } from '@ngrx/store';
import { updateHomeName } from '../actions/home.actions';

export const homeFeatureKey = 'home';

export interface State {
  name: string;
}

export const initialState: State = {
  name: 'gino',
};

export const reducer = createReducer(
  initialState,
  on(updateHomeName, (state: State, props) => {
    return {
      ...state,
      name: state.name + props.name,
    };
  }),
);
