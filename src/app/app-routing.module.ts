import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/weather/homepage/homepage.component';
import { WeatherInfoComponent } from './modules/weather/weather-info/weather-info.component';
import { ResolveGuard } from './guards/resolve.guard';
import { WeatherPhotosComponent } from './modules/weather/weather-photos/weather-photos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'weather', component: WeatherInfoComponent },
  { path: 'weather-photos', component: WeatherPhotosComponent, resolve: { data: ResolveGuard } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
