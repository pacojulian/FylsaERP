import { Component, OnInit } from '@angular/core';
import {AssociatesService} from '../associates.service';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-associates-update',
  templateUrl: './associates-update.component.html',
  styleUrls: ['./associates-update.component.css']
})
export class AssociatesUpdateComponent implements OnInit {

    associates: Associates;
    companies = [];
    selectedValue = null;
    associatesID:string;
    associatesName:string;
    constructor(private associatesService:AssociatesService) {
     this.associates = new Associates("","","",0);
   }
  ngOnInit() {
      
      
     this.associatesService.findAll().subscribe(res => {for(let i in res){
          this.companies.push({
               'name': res[i].NAME
          });}     
      }      
      );

  }

    findAssociate(){
       
         this.associatesID= this.associates._id;
         this.associatesService.findAssociate(this.associates._id).subscribe((res: any) =>{
             this.associates = res;
           
         });
    }
    updateAssociate(name:string){
        
        this.associates._id= this.associatesID;
        this.associates.NAME= name;
        this.associates.COMPANY= this.selectedValue.name;
       this.associatesService.updateAssociate(this.associates).subscribe((res) => alert("Associate Updated Succesfully"));
    }
}

