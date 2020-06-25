import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProfile from '../reducers/profile.reducer';
import { Observable } from 'rxjs';
import { getProfileName } from '../selectors/profile.selectors';
import { updateProfileName } from '../actions/profile.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name$: Observable<string>;

  constructor(private readonly profileStore: Store<fromProfile.State>) {}

  ngOnInit(): void {
    this.name$ = this.profileStore.pipe(select(getProfileName));
  }

  updateName() {
    this.name$.pipe(take(1)).subscribe((name) => {
      this.profileStore.dispatch(updateProfileName({ name: name + 'Yow' }));
    });
  }

  resetName() {
    this.name$.pipe(take(1)).subscribe((name) => {
      this.profileStore.dispatch(updateProfileName({ name: 'Carlo Gino' }));
    });
  }
}
