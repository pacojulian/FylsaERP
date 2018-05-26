import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Inventory} from '../Models/inventory';
import {Quotation} from '../Models/quotation';

@Injectable()
export class CotizacionService {

   apiRoot: string = "http://localhost:8080";
   public inventory: Inventory[];


  constructor(private http:HttpClient) { }

  findItems(searchBy) {
      let url = `${this.apiRoot}/products/find?desc=`+searchBy;
      return this.http.get(url);
  }

  newQuotation(quotation) {
    let url = `${this.apiRoot}/cotizacion/new`;
    this.http.post(url,quotation).subscribe((res) => alert(JSON.stringify(res["success"])));
  }

  findQuotation(id) {
      console.log(id);
    let url = `${this.apiRoot}/cotizacion/findOne?id=`+id;
    return this.http.get(url);
  }
}
