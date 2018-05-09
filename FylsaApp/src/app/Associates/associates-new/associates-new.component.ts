import { Component, OnInit } from '@angular/core';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-new',
  templateUrl: './associates-new.component.html',
  styleUrls: ['./associates-new.component.css']
})
export class AssociatesNewComponent implements OnInit {

     associates: Associates;    
  companies = [];
 selectedValue = null;
  constructor(private  associatesService: AssociatesService) {
      this.associates = new Associates("","","",0);
      
   }
  ngOnInit() {
      
      
     this.associatesService.findAll().subscribe(res => {for(let i in res){
           var obj = {} as this.companies;
          obj.name =res[i].NAME;
          this.companies.push(obj);}     
      }      
      );
   // this.getAssociates(); 
  }

   /* getAssociates (){
        this.associatesService.findAll().subscribe(res =>{this.associatesAll= res;
                                                         console.log(this.associatesAll[1].COMPANY);});        
    }*/

    
    createAssociate(){
        this.associates.COMPANY = this.selectedValue.name;
        console.log(this.associates);
        
    
        this.associatesService.newAssociate(this.associates);
    }
}
