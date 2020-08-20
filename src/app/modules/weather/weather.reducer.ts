import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';

export const SET_LOCATION = 'SET_LOCATION';
export const initialState = '';

export interface WeatherState {
  availableWeather: any[];
}

export interface State extends fromRoot.State {
  weather: WeatherState;
}

export function weatherReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOCATION:
      state = action.payload;
      return state;
    default: {
      return state;
    }
  }
}

export const getWeatherState = createFeatureSelector<WeatherState>('weather');
export const getAvailableWeather = createSelector(
  getWeatherState,
  (state: WeatherState) => state.availableWeather
);
