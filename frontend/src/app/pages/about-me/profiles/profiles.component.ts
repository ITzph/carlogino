import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilesComponent implements OnInit {
  person: Profile;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProfile().subscribe((profile: Profile) => (this.person = profile));
  }
}
