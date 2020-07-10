import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { ThemesComponent } from './themes/themes.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [AboutMeComponent, ThemesComponent, ProfilesComponent, TestimonialComponent],
  imports: [CommonModule, AboutMeRoutingModule],
})
export class AboutMeModule {}
