import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coffee } from './store/coffee.action';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Coffee[]>('https://random-data-api.com/api/coffee/random_coffee?size=50');
  }
}
