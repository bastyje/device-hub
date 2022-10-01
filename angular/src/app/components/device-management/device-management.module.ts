import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceManagementRoutingModule } from './device-management-routing.module';
import { DeviceManagementComponent } from './device-management.component';
import { DeviceManagementDetailComponent } from './device-management-detail/device-management-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DeviceManagementComponent,
    DeviceManagementDetailComponent
  ],
  imports: [
    CommonModule,
    DeviceManagementRoutingModule,
    SharedModule
  ]
})
export class DeviceManagementModule { }
