import { createAction, props } from '@ngrx/store';
import { Coffee } from './coffee';

export const invokeCoffeeAPI = createAction(
  '[Coffee API] Invoke Coffee Fetch API'
);

export const coffeeFetchAPISuccess = createAction(
  '[Coffee API] Fetch API Success',
  props<{ allCoffee: Coffee[] }>()
);
export { Coffee };

