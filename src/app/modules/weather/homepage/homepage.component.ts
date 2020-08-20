import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SET_LOCATION } from '../weather.reducer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomePageComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  locationForm: FormGroup;

  constructor(private store: Store<any>, private router: Router) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
    });
  }

  ngOnInit() {
    this.locationForm = new FormGroup({
      location: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  onSubmit() {
    if (this.locationForm.invalid) {
      return;
    }
    this.store.dispatch({
      type: SET_LOCATION,
      payload: this.locationForm.controls.location.value,
    });
    this.router.navigateByUrl('weather');
  }
}
