import { NgModule } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {CompanyComponent} from '../company/company.component'
import {RouterModule, Routes} from '@angular/router'



const routes: Routes = [
  {path:'login',component: LoginComponent},
 {
     path:'Dashboard',component: DashboardComponent,
     children:
     [
     
     {path:'Company', component:CompanyComponent}
    
     ]
 }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
