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
    idCtrl: FormControl;
    nameCtrl: FormControl;
    dirCtrl: FormControl;
    rfcCtrl: FormControl;
     public company: Company;

  constructor(private companyService:CompanyService, private fb:FormBuilder) {
      this.company = new Company("","","","");
      this.idCtrl = new FormControl('', Validators.required);
      this.nameCtrl = new FormControl('', Validators.required);
      this.dirCtrl = new FormControl('', Validators.required);
      this.rfcCtrl = new FormControl('', Validators.required);
   }

  ngOnInit() {
    this.newForm  = this.fb.group({
      'inputId': this.idCtrl,
      'inputName': this.nameCtrl,
      'inputDir': this.dirCtrl,
      'inputRFC': this.rfcCtrl
    });
  }


    createCompany(){
      if(this.newForm.valid) {
        this.companyService.newCompany(this.company);
      }
    }
}
