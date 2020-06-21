import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import * as fromHome from '../reducers/home.reducer';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
  ],
})
export class HomeModule {}
