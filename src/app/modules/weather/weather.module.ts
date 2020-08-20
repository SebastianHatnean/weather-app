import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from '../weather/homepage/homepage.component';
import { TopBarComponent } from '../weather/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { CurrentWeatherComponent } from '../weather/current-weather/current-weather.component';
import { ForecastComponent } from '../weather/forecast/forecast.component';
import { UvComponent } from '../weather/uv/uv.component';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/material.module';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherPhotosComponent } from './weather-photos/weather-photos.component';
import { RouterModule } from '@angular/router';
import { weatherReducer } from './weather.reducer';


export function logger(reducer: ActionReducer<any>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule, 
    StoreModule.forRoot({
      loc: weatherReducer,
    }),
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    AppMaterialModule
  ],
  declarations: [
    HomePageComponent,
    TopBarComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    UvComponent,
    WeatherInfoComponent,
    WeatherPhotosComponent,
  ],
  exports: [ HomePageComponent ],
  providers: [WeatherService],
})
export class WeatherModule {}
