import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login/login.component'
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component:LoginComponent},

  { path: 'dashboard', component: DashboardComponent, children: 
    [{
    path:'',
    loadChildren: './Dashboard/dashboard/dashboard.module#DashboardModule',
    }]},

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
