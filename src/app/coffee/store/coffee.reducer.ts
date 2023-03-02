import { createReducer, on } from '@ngrx/store';
import { Coffee } from './coffee';
import { coffeeFetchAPISuccess } from './coffee.action';

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
  initialState,
  on(coffeeFetchAPISuccess, (state, { allCoffee }) => {
    return allCoffee;
  })
);
