import { Component, OnInit, Input } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';


@Component({
  selector: 'app-company-read',
  templateUrl: './company-read.component.html',
  styleUrls: ['./company-read.component.css']
})
export class CompanyReadComponent implements OnInit {

    
    company: Company;
    constructor(private companyService:CompanyService) {
     this.company = new Company("","","","");
   }

  ngOnInit() {
        
  }
    getCompany(){
       
         this.companyService.findCompany(this.company._id).subscribe((res: any) =>{
             this.company = res;
         });
    }
}
