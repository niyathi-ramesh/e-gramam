import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemographyComponent } from './demography/demography.component';
import { HistoryComponent } from './history/history.component';
import { MapOfVillageComponent } from './map-of-village/map-of-village.component';
import { WhoIsWhoComponent } from './who-is-who/who-is-who.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'who-is-who', component: WhoIsWhoComponent },
  { path: 'map-of-village', component: MapOfVillageComponent },
  { path: 'demography', component: DemographyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
