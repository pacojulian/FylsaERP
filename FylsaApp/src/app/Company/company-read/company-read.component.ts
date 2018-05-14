import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-read',
  templateUrl: './company-read.component.html',
  styleUrls: ['./company-read.component.css']
})
export class CompanyReadComponent implements OnInit {

    readForm: FormGroup; // Declare the signupForm
    idCtrl: FormControl;
    company: Company;

    constructor(private companyService:CompanyService, private fb:FormBuilder) {
     this.company = new Company("","","","");
     this.idCtrl = new FormControl('', Validators.required);
   }

  ngOnInit() {
    this.readForm  = this.fb.group({
      'inputId': this.idCtrl
    });

  }
    getCompany(){
      // if(this.readForm.valid) {
         this.companyService.findCompany(this.company._id).subscribe((res: any) =>{
             this.company = res;
         });
       // }
    }
}
