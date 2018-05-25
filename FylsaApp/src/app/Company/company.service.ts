import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Company} from '../Models/company';


@Injectable()
export class CompanyService {

     apiRoot: string = "http://localhost:8080";
     public company: Company;

  constructor(private http:HttpClient) { }

    newCompany(company) {

        let url = `${this.apiRoot}/company/new`;
         this.http.post(url,company).subscribe((res) => alert(JSON.stringify(res["success"])));
  }

    findCompany(id){
         let url = `${this.apiRoot}/company/find?id=`+id;
         return this.http.get(url);

    }

     updateCompany(company){
         let url = `${this.apiRoot}/company/update`;
         return this.http.post(url,company);

    }

      deleteCompany(id){
          let url = `${this.apiRoot}/company/delete?id=`+id;
         return this.http.get(url);

    }

    findAllCompanies() {
      let url = `${this.apiRoot}/company/findAll`;
      return this.http.get(url);
    }

}
