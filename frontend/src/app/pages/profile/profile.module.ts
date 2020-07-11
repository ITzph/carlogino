import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as fromProfile from '../../reducers/profile.reducer';
import { ProfileRoutingModule } from './profile-routing-module';
import { AutoTypewriteComponent } from './auto-typewrite/auto-typewrite.component';

@NgModule({
  declarations: [ProfileComponent, AutoTypewriteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ProfileRoutingModule,
    StoreModule.forFeature(fromProfile.profileFeatureKey, fromProfile.reducer),
  ],
})
export class ProfileModule {}
