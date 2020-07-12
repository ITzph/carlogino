import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProfile from '../../reducers/profile.reducer';
import { Observable } from 'rxjs';
import { getProfile } from '../../selectors/profile.selectors';
import { ApiService } from '../../services/api.service';
import { Profile } from '../../models/profile';
import { setProfile } from 'src/app/actions/profile.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  profile$: Observable<Profile>;
  isTranscriptVisible = false;

  constructor(
    private readonly profileStore: Store<fromProfile.State>,
    private readonly apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.profile$ = this.profileStore.pipe(select(getProfile));
    this.apiService.getProfile().subscribe(
      (profile) => {
        this.updateProfile(profile);
      },
      (error) => {
        console.error(error);
        this.updateProfile(Profile.defaultInstance());
      },
    );
  }

  updateProfile(profile: Profile) {
    this.profileStore.dispatch(setProfile({ profile }));
  }

  toggleTranscript(isVisible: boolean) {
    this.isTranscriptVisible = isVisible;
  }
}
