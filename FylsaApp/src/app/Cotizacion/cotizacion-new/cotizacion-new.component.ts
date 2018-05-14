import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CotizacionService} from '../cotizacion.service';
import {Inventory} from '../../Models/inventory';
import {Quotation} from '../../Models/quotation';
import {Cotizacion_Service} from '../../Models/cotizacion-service';


@Component({
  selector: 'app-cotizacion-new',
  templateUrl: './cotizacion-new.component.html',
  styleUrls: ['./cotizacion-new.component.css'],
})
export class CotizacionNewComponent implements OnInit {

  inventoryList: Inventory[];
  inventoryQList: Inventory[];
  quotation: Quotation;
  csList: Cotizacion_Service[];
  searchBy: string;
  itemIndex: number;
  quantity: number[];
  typeService: string[];
  total: number;
  now: Date;
  otherInventoryItem: Inventory;
  /*displayStyle = {
    'display':'none'
  };*/

  constructor(private cotizacionService: CotizacionService) { }

  ngOnInit() {
   /* $(document).ready(function () {


    });*/
    this.inventoryList = new Array<Inventory>();
    this.inventoryQList = new Array<Inventory>();
    this.csList = new Array<Cotizacion_Service>();
    this.otherInventoryItem = new Inventory("","",0,0,"");
    this.quotation = new Quotation("","","","","",0,"","",this.csList,0);
    this.searchBy = "";
    this.itemIndex = 0;
    this.quantity = new Array<number>();
    this.typeService = new Array<string>();
    this.total = 0;
  }

  downloadPDF() {
    return xepOnline.Formatter.Format('HTMLtoPDF', {render: 'download', pageWidth:'216mm', pageHeight:'279mm'});
  }

  getItems() {
    this.cotizacionService.findItems(this.searchBy).subscribe((res:any) => {
      this.inventoryList = res;
      // console.log(this.inventoryList.length)
    });

  }

  addToQuotation(i){
    this.itemIndex = this.itemIndex + 1;
    let cot = new Cotizacion_Service(this.itemIndex,this.inventoryList[i].DESCRIPTION,"",1,this.inventoryList[i].UNITY_MESURE,0);
    this.csList.push(cot);
    this.inventoryQList.push(this.inventoryList[i]);
  }

  addToInventoryList() {
      if(this.otherInventoryItem.DESCRIPTION != "" &&
      this.otherInventoryItem.PRICE != 0 &&
      this.otherInventoryItem.LABOR_PRICE != 0 &&
      this.otherInventoryItem.UNITY_MESURE != "") {
        this.itemIndex = this.itemIndex + 1;

        let cot = new Cotizacion_Service(this.itemIndex,this.otherInventoryItem.DESCRIPTION,"",1,this.otherInventoryItem.UNITY_MESURE,0);
        this.csList.push(cot);
        this.inventoryQList.push(this.otherInventoryItem);
      }
  }

  saveChanges(j) {
      this.csList[j].CANTITY = this.quantity[j];
      this.csList[j].PROVIDE = this.typeService[j];
      console.log(this.quantity[j])
      if(this.typeService[j] == 'Suministro' || this.csList[j].PROVIDE == 'Suministro') {
          this.csList[j].SALE_PRICE = this.inventoryQList[j].PRICE * this.quantity[j];
      }
      if(this.typeService[j] == 'Instalacion' || this.csList[j].PROVIDE == 'Instalacion') {
          this.csList[j].SALE_PRICE = this.inventoryQList[j].LABOR_PRICE * this.quantity[j];
      }
      if(this.typeService[j] == 'Suministro e Instalacion' || this.csList[j].PROVIDE == 'Suministro e Instalacion') {
        this.csList[j].SALE_PRICE = (this.inventoryQList[j].PRICE * this.quantity[j]) + (this.inventoryQList[j].LABOR_PRICE * this.quantity[j]);
      }
       this.csList[j].SALE_PRICE = parseFloat(this.csList[j].SALE_PRICE.toFixed(4));
      this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    for (let quoteItem of this.csList) {
      this.total = this.total + quoteItem.SALE_PRICE;
    }
  }

  createQuotation() {
    this.now = new Date();
    let dd = ("0" + this.now.getDate()).slice(-2)
    let mm = ("0" + (this.now.getMonth() + 1)).slice(-2)
    let yyyy = this.now.getFullYear();
    let fecha = dd + '/' + mm + '/' + yyyy;

    this.quotation.COST = this.total;
    this.quotation.COTIZACION_SERVICE = this.csList;
    this.quotation.DATE = fecha;
    this.quotation._id = yyyy+""+mm+""+dd;
    this.quotation.USER_ID = 10;
    this.cotizacionService.newQuotation(this.quotation);
    /*this.displayStyle = {
      'display':'block'
    };*/
    this.downloadPDF();
    /*this.displayStyle = {
      'display':'none'
    };*/
  }
}
