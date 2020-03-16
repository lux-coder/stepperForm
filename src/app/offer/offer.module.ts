import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { AdditionalComponent } from './additional/additional.component';
import { LocationComponent } from './location/location.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HereMapComponent } from './here-map/here-map.component';


@NgModule({
  declarations: [
    HomeComponent, 
    GeneralComponent, 
    AdditionalComponent, 
    LocationComponent, HereMapComponent],
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class OfferModule { }
