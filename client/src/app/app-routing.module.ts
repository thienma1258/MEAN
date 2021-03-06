import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {path:'dashboard',component:DashboardComponent},
  {path:'**' ,component:HomeComponent}
];
@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule{ }