import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SET_LOCATION } from '../weather.reducer';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopBarComponent implements OnInit {
  loc: string;
  loc$: Observable<string>;

  @Output() modalOpened: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<any>) {
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
    });
  }

  ngOnInit() {}

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }

  openModal() {
    this.modalOpened.emit(true);
  }

}
