import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './header/header.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { Section2Component } from './section2/section2.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './register/doctor/doctor.component';
import { ClientComponent } from './register/client/client.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorCardComponent } from './doctor-card/doctor-card.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';


const routes: Routes = [
    {path: 'home', component: MainscreenComponent},
    {path: 'login', component: LoginComponent},
    {path: 'doctor-registration', component: DoctorComponent},
    {path: 'client-registration', component: ClientComponent},
    {path: 'doctor-list', component: DoctorListComponent},
    {path: 'doctor-detail', component: DoctorDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Components = [
    HeaderComponent,
    MainscreenComponent,
    LoginComponent,
    Section2Component,
    DoctorComponent,
    ClientComponent,
    DoctorListComponent,
    DoctorCardComponent,
    DoctorDetailsComponent
];
