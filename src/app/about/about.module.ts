import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { WhoIsWhoComponent } from './who-is-who/who-is-who.component';
import { MapOfVillageComponent } from './map-of-village/map-of-village.component';
import { DemographyComponent } from './demography/demography.component';
import { HistoryCultureComponent } from './history-culture/history-culture.component';

@NgModule({
  declarations: [
    AboutComponent,
    HistoryCultureComponent,
    WhoIsWhoComponent,
    MapOfVillageComponent,
    DemographyComponent,
  ],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
