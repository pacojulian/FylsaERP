import { Component, OnInit, Input} from '@angular/core';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {
 
     public company: Company;
    
  constructor(private companyService:CompanyService) {
      this.company = new Company("","","","");
   }

  ngOnInit() {
    
  }
 
  
    createCompany(){
        this.companyService.newCompany(this.company);
    }
}
