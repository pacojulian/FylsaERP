import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders,HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.css']
})



export class ProductImportComponent implements OnInit {

     apiRoot: string = "http://localhost:8080";
    fileToUpload: File = null;
    
    
  constructor(private http:HttpClient) { }

  ngOnInit() {
      
  }
    
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
      //console.log(this.fileToUpload);
}
    
    doGET() {
    
        let url = `${this.apiRoot}/prueba`;
        console.log(this.fileToUpload);
        this.http.post(url,this.fileToUpload).subscribe(res => console.log(res.toString()));
  }

}
