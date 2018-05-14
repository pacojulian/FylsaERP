import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{DashboardService} from '../dashboard/dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    sessionName:string;
    sessionAdmin:number;

  constructor(
      private router:Router,
        private dashService:DashboardService   
  ) { }
  ngOnInit() {
      
    
      this.dashService.getCookies();
      this.sessionAdmin= this.dashService.getAdminCookie();
       this.sessionName= this.dashService.getUserCookie();
     
  }

    /*
    * Company View
    */
    viewNewCompanyNew(){
        if(this.sessionAdmin==1){   
             this.router.navigate(['Dashboard/Company/new']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
    }
      viewNewCompanyAll(){ 
           if(this.sessionAdmin==1){          
            this.router.navigate(['Dashboard/Company/all']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
        
    }
      viewNewCompanyUpdate(){
            if(this.sessionAdmin==1){
            this.router.navigate(['Dashboard/Company/update']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
    }
      viewNewCompanyDelete(){
            if(this.sessionAdmin==1){    
           this.router.navigate(['Dashboard/Company/delete']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
    }
    /*
    * Products View
    */
     viewProductsImport(){
                 if(this.sessionAdmin==1){    
           this.router.navigate(['Dashboard/Products/Import']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
       
    }
    /*
    Asociados View
    */
      viewAssociatesNew(){
                  if(this.sessionAdmin==1){    
          this.router.navigate(['Dashboard/Associates/New']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
       
    }
      viewAssociatesRead(){
                if(this.sessionAdmin==1){    
        this.router.navigate(['Dashboard/Associates/Read']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
       
        
    }
      viewAssociatesUpdate(){
         if(this.sessionAdmin==1){    
             this.router.navigate(['Dashboard/Associates/Update']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
      
    }
       viewAssociatesRemove(){
      if(this.sessionAdmin==1){    
              this.router.navigate(['Dashboard/Associates/Remove']);
        }else
            {
                alert("No tienes Los permisos para acceder a este modulo, Contacta al administrador");
            }
      
       
    }
    /*
    * Cotizacion View
    */

     viewCotizacionNew(){

        this.router.navigate(['Dashboard/Cotizacion/new']);
    }
    
   

}
