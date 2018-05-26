import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Associates} from '../Models/associates';
import {Company} from '../Models/company';


@Injectable()
export class AssociatesService {

       apiRoot: string = "http://localhost:8080";
        public associates: Associates;

 constructor(private http:HttpClient) { }

     newAssociate(associates) {
        console.log(associates.COMPANY)
        let url = `${this.apiRoot}/associates/new`;
         this.http.post(url,associates).subscribe((res) => alert(JSON.stringify(res["success"])));
    }
      findAll():Observable<Company[]>{

         let url = `${this.apiRoot}/company/findAll`;
         return this.http.get<Company[]>(url);

    }

    findAssociate(id){

         let url = `${this.apiRoot}/associates/find?id=`+id;
         return this.http.get(url);

    }

    findAssociatesByCompany(company) {
      let url = `${this.apiRoot}/associates/findByCompany?company=`+company;
      return this.http.get(url);
    }

     updateAssociate(associates){
         let url = `${this.apiRoot}/associates/update`;
         return this.http.post(url,associates);

    }

      deleteAssociate(id){
          let url = `${this.apiRoot}/associates/delete?id=`+id;
         return this.http.get(url);

    }
}
