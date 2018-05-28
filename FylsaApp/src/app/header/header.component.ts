import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import{DashboardService} from '../dashboard/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    sessionName:string;
 constructor(
      private router:Router,
         private cookieService: CookieService,
         private dashService:DashboardService   
  ) { }
  ngOnInit() {
        this.sessionName= this.dashService.getUserCookie();
     console.log( this.sessionName);
      if(!this.sessionName){    
           this.router.navigate(['login']);
      }
  }
   /*
    * LogOut
    */
    
    logOut(){

       this.dashService.deleteCookies();
        this.router.navigate(['login']);
    }

}
