import { createFeatureSelector } from '@ngrx/store';
import { Coffee } from './coffee';
 
export const selectCoffee = createFeatureSelector<Coffee[]>('coffeeDetails');
