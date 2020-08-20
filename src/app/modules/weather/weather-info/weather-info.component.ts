import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SET_LOCATION } from '../weather.reducer';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})

export class WeatherInfoComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  openConfirmationModal = false;
  locationForm: FormGroup;

  constructor(private store: Store<any>, private router: Router) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
    });
  }

  ngOnInit() {
    if (!this.loc) {
      this.router.navigateByUrl('');
    }
    this.locationForm = new FormGroup({
      location: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  getNotification(event) {
    this.openConfirmationModal = event;
  }

  closeModal() {
    this.openConfirmationModal = !this.openConfirmationModal;
  }

  onSubmit() {
    if (this.locationForm.invalid) {
      return;
    }
    this.store.dispatch({
      type: SET_LOCATION,
      payload: this.locationForm.controls.location.value,
    });
    this.closeModal();
    this.locationForm.reset();
    this.router.navigateByUrl('weather');
  }

}
