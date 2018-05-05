import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.css']
})



export class ProductImportComponent implements OnInit {

    
    fileToUpload: File = null;
    
    
  constructor() { }

  ngOnInit() {
      
  }
    
   
    

}
