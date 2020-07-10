import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Profiles } from 'src/app/models/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss'],
})
export class ProfilesComponent implements OnInit {
  person: Profiles;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchProfile.subscribe((profile: Profiles) => (this.person = profile));
  }
}
