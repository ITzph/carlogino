import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './about-me.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [AboutMeComponent, ThemesComponent],
  imports: [CommonModule, AboutMeRoutingModule],
})
export class AboutMeModule {}
