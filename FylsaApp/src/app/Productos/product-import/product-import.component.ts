import { Component, OnInit } from '@angular/core';
import {Injectable} from '@angular/core';
import {ProductsService} from '../products.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.css']
})



export class ProductImportComponent implements OnInit {

    
    fileToUpload: File = null;
    
    
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
      
  }
    
   import(){
       this.productsService.importProducts().subscribe((res) => alert(JSON.stringify(res["success"])));
   }
    

}
