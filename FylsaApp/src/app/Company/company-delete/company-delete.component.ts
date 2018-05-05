import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent implements OnInit {

  company: Company;
    constructor(private companyService:CompanyService) {
     this.company = new Company("","","","");
   }

  ngOnInit() {
  }

     deleteCompany(){
        console.log(this.company._id);
         this.companyService.deleteCompany(this.company._id).subscribe((res) => alert(JSON.stringify(res["success"])));
    }
}
