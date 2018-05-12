import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-new',
  templateUrl: './associates-new.component.html',
  styleUrls: ['./associates-new.component.css']
})
export class AssociatesNewComponent implements OnInit {

  newForm: FormGroup; // Declare the signupForm
  idCtrl: FormControl;
  nameCtrl: FormControl;
  associates: Associates;
  companies = [];
  selectedValue = null;
  constructor(private  associatesService: AssociatesService, private fb:FormBuilder) {
      this.associates = new Associates("","","",0);
      this.idCtrl = new FormControl('', Validators.required);
      this.nameCtrl = new FormControl('', Validators.required);
   }
  ngOnInit() {

    this.newForm  = this.fb.group({
      'inputId': this.idCtrl,
      'inputName': this.nameCtrl
    });

     this.associatesService.findAll().subscribe(res => {for(let i in res){
          this.companies.push({
              'name': res[i].NAME
          });
        }
      });
   // this.getAssociates();
  }

   /* getAssociates (){
        this.associatesService.findAll().subscribe(res =>{this.associatesAll= res;
                                                         console.log(this.associatesAll[1].COMPANY);});
    }*/


    createAssociate(){
      if(this.newForm.valid) {
        this.associates.COMPANY = this.selectedValue.name;
        console.log(this.associates);
        this.associatesService.newAssociate(this.associates);
      }
    }
}
