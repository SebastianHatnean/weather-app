import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-photos',
  templateUrl: './weather-photos.component.html',
  styleUrls: ['./weather-photos.component.css'],
})

export class WeatherPhotosComponent implements OnInit {
  photosData: any[] = [];

  constructor(private activateRoute: ActivatedRoute) {}
  ngOnInit() {
    this.photosData = this.activateRoute.snapshot.data['data'];
  }
}
