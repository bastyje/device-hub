import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layout/main-layout/main-layout.component';
import { MeasurementsComponent } from './measurements.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: MeasurementsComponent,
        children: [
          {
            path: ':id',
            component: MeasurementsComponent,
            children: [
              {
                path: 'errors',
                component: MeasurementsComponent
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeasurementsRoutingModule { }
