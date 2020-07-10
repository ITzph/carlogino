import { Component, OnInit } from '@angular/core';
import { Profiles } from 'src/app/models/profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  testimonial: Profiles;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchProfile().subscribe((profile: Profiles) => (this.testimonial = profile));
  }
}
