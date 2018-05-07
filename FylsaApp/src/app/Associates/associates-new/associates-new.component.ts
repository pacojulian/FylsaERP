import { Component, OnInit } from '@angular/core';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-new',
  templateUrl: './associates-new.component.html',
  styleUrls: ['./associates-new.component.css']
})
export class AssociatesNewComponent implements OnInit {

    public associates: Associates;
  countries = [
       {id: 1, name: "United States"},
       {id: 2, name: "Australia"},
       {id: 3, name: "Canada"},
       {id: 4, name: "Brazil"},
       {id: 5, name: "England"}
     ];
 selectedValue = null;
  constructor(private  associatesService: AssociatesService) {
      this.associates = new Associates("","","");
   }
  ngOnInit() {
  }

    
    createAssociate(){
        console.log(this.associates);
        //this.companyService.newCompany(this.company);
    }
}
