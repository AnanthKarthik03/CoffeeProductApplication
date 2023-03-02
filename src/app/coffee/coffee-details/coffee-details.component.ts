import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCoffeeAPI } from '../store/coffee.action';
import { selectCoffee } from '../store/coffee.selector';
import * as _ from 'underscore';
@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css'],
})
export class CoffeeDetailsComponent {
  selectedCoffee: any[] = [];
  coffeeData: any;
  coffeeDataFilter: any;
  coffeeDetails: any;

  constructor(private store: Store) {}
  coffee$ = this.store.pipe(select(selectCoffee));

  ngOnInit(): void {
    this.selectedCoffee.unshift({
      label: 'Filter By Coffee Blend Name',
      value: null,
    });
    this.store.dispatch(invokeCoffeeAPI());
    this.coffee$.subscribe((data) => {
      this.coffeeData = data;
      this.coffeeDataFilter = data;
      console.log(data);
      this.coffeeData.forEach((item: any) => {
        return this.selectedCoffee.push({
          label: item.blend_name,
          value: item.id,
        });
      });
    });
    console.log(this.coffee$);
  }

  coffeeSelect(event: any) {
    console.log(event);
    const filterData = _.filter(
      this.coffeeDataFilter,
      (item) => parseInt(item.id, 10) === parseInt(event, 10)
    );

    if (filterData && filterData.length > 0) {
      console.log(filterData);
      this.coffeeDetails = filterData;
    }
  }
}
