import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms'
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'**' ,component:HomeComponent}
];
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),  ReactiveFormsModule,BrowserModule],

  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule{ }