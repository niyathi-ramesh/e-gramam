import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, IvyCarouselModule],
  exports: [HomeComponent],
})
export class HomeModule {}
