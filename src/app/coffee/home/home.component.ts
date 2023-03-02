import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeCoffeeAPI } from '../store/coffee.action';
import { selectCoffee } from '../store/coffee.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  first = 0;

  rows = 10;
  coffeeData: any;

  constructor(private store: Store) {}
  coffee$ = this.store.pipe(select(selectCoffee));

  ngOnInit(): void {
    this.store.dispatch(invokeCoffeeAPI());
    this.coffee$.subscribe((data) => {
      this.coffeeData = data;
    });
    console.log(this.coffee$);
  }
}
