import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

   company: Company;
    companyID:string;
    companyName:string;
    constructor(private companyService:CompanyService) {
     this.company = new Company("","","","");
   }
  ngOnInit() {
  }

     getCompany(){
       
         this.companyID= this.company._id;
         this.companyService.findCompany(this.company._id).subscribe((res: any) =>{
             this.company = res;
           
         });
    }
    updateCompany(name:string,direction:string,rfc:string){
        
        this.company._id= this.companyID;
        this.company.NAME= name;
        this.company.DIRECTION= direction;
        this.company.RFC= rfc;
       this.companyService.updateCompany(this.company).subscribe((res) => alert("Company Updated Succesfully"));
    }
}

