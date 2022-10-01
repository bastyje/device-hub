import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group/input-group.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    InputGroupComponent,
    ChartComponent
  ],
  exports: [
    InputGroupComponent,
    ChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
