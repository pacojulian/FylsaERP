import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-update',
  templateUrl: './associates-update.component.html',
  styleUrls: ['./associates-update.component.css']
})
export class AssociatesUpdateComponent implements OnInit {

    updateForm: FormGroup; // Declare the signupForm
    idCtrl: FormControl;
    associates: Associates;
    companies = [];
    selectedValue = null;
    associatesID:string;
    associatesName:string;
    constructor(private associatesService:AssociatesService, private fb:FormBuilder) {
     this.associates = new Associates("","","",0);
     this.idCtrl = new FormControl('', Validators.required);
   }
  ngOnInit() {

    this.updateForm  = this.fb.group({
      'inputId': this.idCtrl
    });

     this.associatesService.findAll().subscribe(res => {for(let i in res){

          this.companies.push({
               'name': res[i].NAME
          });}
      });

  }

    findAssociate(){
        if(this.updateForm.valid) {
         this.associatesID= this.associates._id;
         this.associatesService.findAssociate(this.associates._id).subscribe((res: any) =>{
             this.associates = res;
         });
       }
    }
    updateAssociate(name:string){

        this.associates._id= this.associatesID;
        this.associates.NAME= name;
        this.associates.COMPANY= this.selectedValue.name;
       this.associatesService.updateAssociate(this.associates).subscribe((res) => alert("Associate Updated Succesfully"));
    }
}
