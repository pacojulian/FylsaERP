import { Component, OnInit } from '@angular/core';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-read',
  templateUrl: './associates-read.component.html',
  styleUrls: ['./associates-read.component.css']
})
export class AssociatesReadComponent implements OnInit {

    associates: Associates;
    constructor(private associatesService:AssociatesService) {
     this.associates = new Associates("","","",0);
   }

  ngOnInit() {
  }
   getAssociates(){
       
         this.associatesService.findAssociate(this.associates._id).subscribe((res: any) =>{
             this.associates = res;
         });
    }
}

