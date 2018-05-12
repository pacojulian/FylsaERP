import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-read',
  templateUrl: './associates-read.component.html',
  styleUrls: ['./associates-read.component.css']
})
export class AssociatesReadComponent implements OnInit {

    readForm: FormGroup; // Declare the signupForm
    idCtrl: FormControl;
    associates: Associates;

    constructor(private associatesService:AssociatesService, private fb:FormBuilder) {
     this.associates = new Associates("","","",0);
     this.idCtrl = new FormControl('', Validators.required);
   }

  ngOnInit() {
    this.readForm  = this.fb.group({
      'inputId': this.idCtrl
    });
  }
   getAssociates(){
       if(this.readForm.valid) {
         this.associatesService.findAssociate(this.associates._id).subscribe((res: any) =>{
             this.associates = res;
         });
       }
    }
}
