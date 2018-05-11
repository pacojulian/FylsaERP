import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CompanyService} from '../company.service';
import {Company} from '../../Models/company';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

    newForm: FormGroup;
     public company: Company;

  constructor(private companyService:CompanyService, private fb:FormBuilder) {
      this.company = new Company("","","","");
   }

  ngOnInit() {
    this.newForm  = this.fb.group({
      'inputId': new FormControl('', Validators.required),
      'inputName': new FormControl('', Validators.required),
      'inputDir': new FormControl('', Validators.required),
      'inputRFC': new FormControl('', Validators.required)
    });
  }


    createCompany(){
      if(this.newForm.valid) {
        this.companyService.newCompany(this.company);
      }
    }
}
