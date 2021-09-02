import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemographyComponent } from './demography/demography.component';
import { HistoryCultureComponent } from './history-culture/history-culture.component';
import { MapOfVillageComponent } from './map-of-village/map-of-village.component';
import { WhoIsWhoComponent } from './who-is-who/who-is-who.component';

const routes: Routes = [
  { path: 'history-culture', component: HistoryCultureComponent },
  { path: 'who-is-who', component: WhoIsWhoComponent },
  { path: 'map-of-village', component: MapOfVillageComponent },
  { path: 'demography', component: DemographyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
