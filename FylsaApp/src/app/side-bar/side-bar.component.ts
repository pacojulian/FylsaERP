import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    sessionName:string;

  constructor(
      private router:Router,
      private cookieService: CookieService
  ) { }
  ngOnInit() {
      this.sessionName=this.cookieService.get('User');
  }

    /*
    * Company View
    */
    viewNewCompanyNew(){

        this.router.navigate(['Dashboard/Company/new']);
    }
      viewNewCompanyAll(){

        this.router.navigate(['Dashboard/Company/all']);
    }
      viewNewCompanyUpdate(){

        this.router.navigate(['Dashboard/Company/update']);
    }
      viewNewCompanyDelete(){

        this.router.navigate(['Dashboard/Company/delete']);
    }
    /*
    * Products View
    */
     viewProductsImport(){
        this.router.navigate(['Dashboard/Products/Import']);
    }
    /*
    Asociados View
    */
      viewAssociatesNew(){
        this.router.navigate(['Dashboard/Associates/New']);
    }
      viewAssociatesRead(){

        this.router.navigate(['Dashboard/Associates/Read']);
    }
      viewAssociatesUpdate(){

        this.router.navigate(['Dashboard/Associates/Update']);
    }
       viewAssociatesRemove(){

        this.router.navigate(['Dashboard/Associates/Remove']);
    }
    /*
    * Cotizacion View
    */

     viewCotizacionNew(){

        this.router.navigate(['Dashboard/Cotizacion/new']);
    }

}
