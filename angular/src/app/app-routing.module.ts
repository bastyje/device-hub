import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/shared/layout/main-layout/main-layout.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    pathMatch: 'full',
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [SignedInGuardService],
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'measurements',
    loadChildren: () => import('./components/measurements/measurements.module').then(m => m.MeasurementsModule)
  },
  {
    path: 'device-management',
    loadChildren: () => import('./components/device-management/device-management.module').then(m => m.DeviceManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
