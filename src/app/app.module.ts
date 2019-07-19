import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSelectModule,MatListModule,MatChipsModule,
   MatFormFieldModule,  MatInputModule, MatDividerModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { Section2Component } from './section2/section2.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './register/doctor/doctor.component';
import { ClientComponent } from './register/client/client.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainscreenComponent,
    Section2Component,
    LoginComponent,
    DoctorComponent,
    ClientComponent,
    DoctorListComponent,
    DoctorCardComponent,
    DoctorDetailsComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
     MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
