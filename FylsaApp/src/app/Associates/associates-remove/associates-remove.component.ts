import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';


@Component({
  selector: 'app-associates-remove',
  templateUrl: './associates-remove.component.html',
  styleUrls: ['./associates-remove.component.css']
})
export class AssociatesRemoveComponent implements OnInit {

    deleteForm: FormGroup; // Declare the signupForm
    idCtrl: FormControl;
    associates: Associates;

  constructor(private  associatesService: AssociatesService, private fb:FormBuilder) {
      this.associates = new Associates("","","",0);
      this.idCtrl = new FormControl('', Validators.required);
   }
  ngOnInit() {
    this.deleteForm  = this.fb.group({
      'inputId': this.idCtrl
    });
  }
 deleteAssociate(){
      if(this.deleteForm.valid) {
         this.associatesService.deleteAssociate(this.associates._id).subscribe((res) => alert(JSON.stringify(res["success"])));
       }
  }
}
