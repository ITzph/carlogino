import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutSiteRoutingModule } from './about-site-routing.module';
import { AboutSiteComponent } from './about-site.component';

@NgModule({
  declarations: [AboutSiteComponent],
  imports: [CommonModule, AboutSiteRoutingModule],
})
export class AboutSiteModule {}
