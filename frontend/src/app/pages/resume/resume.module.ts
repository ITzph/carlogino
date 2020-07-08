import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ResumeComponent],
  imports: [MatCardModule, CommonModule, ResumeRoutingModule],
})
export class ResumeModule {}
