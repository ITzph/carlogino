import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';
import { Observable } from 'rxjs';
import { selectHomeName } from '../selectors/home.selectors';
import { updateHomeName } from '../actions/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name$: Observable<string>;
  constructor(private readonly homeStore: Store<fromHome.State>) {}

  ngOnInit(): void {
    this.name$ = this.homeStore.pipe(select(selectHomeName));
  }

  updateName() {
    this.homeStore.dispatch(updateHomeName({ name: 'yow' }));
  }
}
