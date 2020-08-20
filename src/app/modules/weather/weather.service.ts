import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';
import * as UI from '../../shared/ui.actions';
import * as fromWeather from './weather.reducer';


const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(
    private http: HttpClient,
    private store: Store<fromWeather.State>
  ) {}
  getCurrentWeather(loc: string) {
    return this.http.get(
      `${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`
    );
  }
  getForecast(loc: string) {
    return this.http.get(
      `${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`
    );
  }
  getUv(lat: number, lon: number) {
    let startDate = Math.round(
      +moment(new Date()).subtract(1, 'week').toDate() / 1000
    );
    let endDate = Math.round(
      +moment(new Date()).add(1, 'week').toDate() / 1000
    );
    return this.http.get(
      `${environment.apiUrl}/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}`
    );
  }

  getSomething() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }
}
