import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Profiles } from 'src/app/models/profile-model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  testimony: Profiles;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProfile().subscribe((profile: Profiles) => (this.testimony = profile));
  }
}
