import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/shared/layout/main-layout/main-layout.component';
import { FooterComponent } from './components/shared/layout/footer/footer.component';
import { NavbarComponent } from './components/shared/layout/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { MeasurementsComponent } from './components/measurements/measurements.component';
import { MeasurementsModule } from './components/measurements/measurements.module';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule } from './services/config/config.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    FooterComponent,
    NavbarComponent,
    MeasurementsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MeasurementsModule,
    HttpClientModule,
    ConfigModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
