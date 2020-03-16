import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { AdditionalComponent } from './additional/additional.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'general', component: GeneralComponent },
      { path: 'additional', component: AdditionalComponent },
      { path: 'location', component: LocationComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
