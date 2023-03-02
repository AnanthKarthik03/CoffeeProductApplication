import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { CoffeeService } from '../coffee.service';
import { coffeeFetchAPISuccess, invokeCoffeeAPI } from './coffee.action';
import { selectCoffee } from './coffee.selector';

@Injectable()
export class CoffeeEffect {
  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService,
    private store: Store
  ) {}

  loadAllCoffee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeCoffeeAPI),
      withLatestFrom(this.store.pipe(select(selectCoffee))),
      mergeMap(([, coffeeformStore]) => {
        if (coffeeformStore.length > 0) {
          return EMPTY;
        }
        return this.coffeeService
          .get()
          .pipe(map((data) => coffeeFetchAPISuccess({ allCoffee: data })));
      })
    )
  );
}
