import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DashboardService {

  constructor( private cookieService: CookieService) { }
     sessionName:string;
    sessionAdmin:number;
    
      
    getCookies(){
        this.sessionName=this.cookieService.get('User');
        this.sessionAdmin=+this.cookieService.get('Admin');
    }
    
    getAdminCookie(){
        return this.sessionAdmin;
    }
       getUserCookie(){
        return this.sessionName;
    }
    
    deleteCookies(){
        console.log("Delete");
        this.cookieService.delete('User',' / ');
       this.cookieService.delete( 'Admin',' / ' );
         this.cookieService.delete( 'UserID',' / ' );
        
    }
}
