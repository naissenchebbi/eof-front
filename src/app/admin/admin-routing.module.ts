import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollComponent } from './coll/coll.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
const routes: Routes = [
  
  { 
    path: '', 
    component: AdminDashboardComponent, 
    children:[
      {path:'sidenav',component:SidenavComponent},
      {path:'dashboard',component:AdminDashboardComponent},


      
 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }