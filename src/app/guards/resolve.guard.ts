import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { WeatherService } from '../modules/weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private weatherService: WeatherService) {}

  resolve() {
    return this.weatherService.getSomething();
  }
}
