import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { WeatherService } from '../weather.service';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})

export class CurrentWeatherComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService,
    private uiService: UIService,
  ) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
      this.searchWeather(loc);
    });
  }

  ngOnInit() {}

  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc).subscribe(
      (res) => {
        this.currentWeather = res;
      },
      (err) => {
        if (err.error && err.error.message) {
          this.msg = err.error.message;
          if (this.msg === 'city not found') {
            this.uiService.showSnackbar(
              'City not found. Try typing again an existing city',
              null,
              5000
            );
          }
          return;
        }
        this.uiService.showSnackbar('Weather not available.', null, 3000);
      },
      () => {}
    );
  }
  
  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
