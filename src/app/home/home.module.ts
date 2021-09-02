import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdministrationEducationComponent } from './administration-education/administration-education.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, CarouselComponent, AdministrationEducationComponent],
  imports: [CommonModule, IvyCarouselModule],
  exports: [HomeComponent],
})
export class HomeModule {}
