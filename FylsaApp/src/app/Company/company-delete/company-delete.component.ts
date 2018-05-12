import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent implements OnInit {

    deleteForm: FormGroup; // Declare the signupForm
    idCtrl: FormControl;
    company: Company;
    
    constructor(private companyService:CompanyService, private fb:FormBuilder) {
     this.company = new Company("","","","");
     this.idCtrl = new FormControl('', Validators.required);
   }

  ngOnInit() {
    this.deleteForm  = this.fb.group({
      'inputId': this.idCtrl
    });
  }

     deleteCompany(){
       if(this.deleteForm.valid) {
        console.log(this.company._id);
         this.companyService.deleteCompany(this.company._id).subscribe((res) => alert(JSON.stringify(res["success"])));
       }
    }
}
