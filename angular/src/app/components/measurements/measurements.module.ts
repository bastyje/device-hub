import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasurementsRoutingModule } from './measurements-routing.module';
import { MeasurementSettingsComponent } from './measurement-settings/measurement-settings.component';
import { MeasurementDetailsComponent } from './measurement-details/measurement-details.component';
import { MeasurementChartsComponent } from './measurement-charts/measurement-charts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MeasurementSettingsComponent,
    MeasurementDetailsComponent,
    MeasurementChartsComponent
  ],
  imports: [
    CommonModule,
    MeasurementsRoutingModule,
    SharedModule
  ],
  exports: [
  
    MeasurementSettingsComponent,
    MeasurementDetailsComponent,
    MeasurementChartsComponent
  ]
})
export class MeasurementsModule { }
