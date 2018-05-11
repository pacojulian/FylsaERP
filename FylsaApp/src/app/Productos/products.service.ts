import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductsService {

      apiRoot: string = "http://localhost:8080";
    
 constructor(private http:HttpClient) { }
    
    
       importProducts(){
      
         let url = `${this.apiRoot}/products/import`;
         return this.http.get(url);
        
    }
}
