import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPhotosComponent } from './weather-photos.component';

describe('WeatherPhotosComponent', () => {
  let component: WeatherPhotosComponent;
  let fixture: ComponentFixture<WeatherPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
