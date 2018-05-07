import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Associates} from '../Models/associates';

@Injectable()
export class AssociatesService {

       apiRoot: string = "http://localhost:8080";
        public associates: Associates;
    
 constructor(private http:HttpClient) { }

     newCompany(associates) {
    
        let url = `${this.apiRoot}/associates/new`;
         this.http.post(url,associates).subscribe((res) => alert(JSON.stringify(res["success"])));
  }
    
    findCompany(id){
      
         let url = `${this.apiRoot}/associates/find?id=`+id;
         return this.http.get(url);
        
    }
    
     updateCompany(associates){
         let url = `${this.apiRoot}/associates/update`;
         return this.http.post(url,associates);
        
    }
    
      deleteCompany(id){
          let url = `${this.apiRoot}/associates/delete?id=`+id;
         return this.http.get(url);
        
    }
}
