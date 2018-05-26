import { NgModule } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import {DashboardComponent} from '../dashboard/dashboard.component'
import {CompanyNewComponent} from '../Company/company-new/company-new.component'
import {CompanyReadComponent} from '../Company/company-read/company-read.component'
import {CompanyUpdateComponent} from '../Company/company-update/company-update.component'
import {CompanyDeleteComponent} from '../Company/company-delete/company-delete.component'
import {ProductImportComponent} from '../Productos/product-import/product-import.component'
import {AssociatesNewComponent} from '../Associates/associates-new/associates-new.component'
import {AssociatesReadComponent} from '../Associates/associates-read/associates-read.component'
import {AssociatesRemoveComponent} from '../Associates/associates-remove/associates-remove.component'
import {AssociatesUpdateComponent} from '../Associates/associates-update/associates-update.component'
import {CotizacionNewComponent} from '../Cotizacion/cotizacion-new/cotizacion-new.component'
import {RouterModule, Routes} from '@angular/router'



const routes: Routes = [
    
    {
        path:'',component:DashboardComponent
    },
    
  {path:'login',component: LoginComponent},
    
 {
     path:'Dashboard',component: DashboardComponent,
     children:
     [
     
     
         {
             path:'Company',
             children:
             [
                 {path:'new',component:CompanyNewComponent},
                 {path:'all',component:CompanyReadComponent},
                 {path:'update',component:CompanyUpdateComponent},
                 {path:'delete',component:CompanyDeleteComponent}
             ]
         },
         {
             path:'Cotizacion',
             children: 
             [
             {path:'new',component:CotizacionNewComponent}
             ]
         },
           {
            path:'Products',
                children:
                [
                    {path:'Import',component:ProductImportComponent}
                ]
    },
      {
            path:'Associates',
                children:
                         [
                             {path:'New',component:AssociatesNewComponent},
                             {path:'Read',component:AssociatesReadComponent},
                             {path:'Remove',component:AssociatesRemoveComponent},
                             {path:'Update',component:AssociatesUpdateComponent}
                         ]
                }
      
     
     
    
     ]
 }
  
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule { }
