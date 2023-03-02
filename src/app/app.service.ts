import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from './app.settings';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(public http: HttpClient) {}

  getItems() {
    const url = AppSettings.API.GET_ITEMS;
    return this.http.get<any>(url, this.token());
  }

  // tslint:disable-next-line:typedef
  token() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return httpOptions;
  }
}
