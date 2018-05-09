import { Component, OnInit } from '@angular/core';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';


@Component({
  selector: 'app-associates-remove',
  templateUrl: './associates-remove.component.html',
  styleUrls: ['./associates-remove.component.css']
})
export class AssociatesRemoveComponent implements OnInit {

     associates: Associates;    

  constructor(private  associatesService: AssociatesService) {
      this.associates = new Associates("","","",0);
      
   }
  ngOnInit() {
  }
 deleteAssociate(){
         this.associatesService.deleteAssociate(this.associates._id).subscribe((res) => alert(JSON.stringify(res["success"])));
    }
}
 