import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {CotizacionService} from '../cotizacion.service';
import {Inventory} from '../../Models/inventory';
import {Quotation} from '../../Models/quotation';
import {Cotizacion_Service} from '../../Models/cotizacion-service';
import {CompanyService} from '../../Company/company.service';
import {AssociatesService} from '../../Associates/associates.service';
import {Company} from '../../Models/company';
import {Associates} from '../../Models/associates';

@Component({
  selector: 'app-cotizacion-new',
  templateUrl: './cotizacion-new.component.html',
  styleUrls: ['./cotizacion-new.component.css'],
})
export class CotizacionNewComponent implements OnInit {

  companies: Company[];
  associates: Associates[];
  inventoryList: Inventory[];
  inventoryQList: Inventory[];
  quotation: Quotation;
  csList: Cotizacion_Service[];
  searchBy: string;
  itemIndex: number;
  quantity: number[];
  typeService: string[];
  typeSelected: number[];
  total: number;
  now: Date;
  otherInventoryItem: Inventory;
  searchQId: Quotation;
  displayStyle;

  constructor(private cotizacionService: CotizacionService, private companyService:CompanyService, private associatesService:AssociatesService) { }

  ngOnInit() {
    $(document).ready(function () {

        var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn');

        allWells.hide();
        

        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                    $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-primary').addClass('btn-default');
                $item.addClass('btn-primary');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });

        allNextBtn.click(function(){
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find("input[type='text'],input[type='url']"),
                isValid = true;

            $(".form-group").removeClass("has-error");
            for(var i=0; i<curInputs.length; i++){
                if (!curInputs[i].validity.valid){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }
            
            

            if (isValid)
                nextStepWizard.removeAttr('disabled').trigger('click');
        });

        $('div.setup-panel div a.btn-primary').trigger('click');

        $("#mySearch").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#resultsTable #myTr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });
    this.companyService.findAllCompanies().subscribe((res: any) =>{
        this.companies = res;
    });
    this.associates = new Array<Associates>();
    this.inventoryList = new Array<Inventory>();
    this.inventoryQList = new Array<Inventory>();
    this.csList = new Array<Cotizacion_Service>();
    this.otherInventoryItem = new Inventory("","",0,0,"");
    this.quotation = new Quotation("","","","","",0,"","",this.csList,0);
    this.searchBy = "";
    this.itemIndex = 0;
    this.quantity = new Array<number>();
    this.typeService = ["Suministro", "Instalacion", "Suministro e Instalacion"];
    this.typeSelected = new Array<number>();
    this.total = 0;
    this.displayStyle = {
      'display':'none'
    };
    //this.quotation._id = "Luis Miguel";
  }

  searchCompanyId(name) {
    let companyId;
    for(let company of this.companies) {
      if(company.NAME == name) {
        companyId = company._id;
        console.log(companyId);
      }
    }
    return companyId;
  }

  changeAddressed(val:any) {
    //let companyId = this.searchCompanyId(val);
    this.associatesService.findAssociatesByCompany(val).subscribe((res: any) =>{
        this.associates = res;
    });
  }

  downloadPDF() {
    setTimeout(()=>{
      return xepOnline.Formatter.Format('HTMLtoPDF', {render: 'download', pageWidth:'216mm', pageHeight:'279mm'});
    }, 100)
    console.log("descargado")
    setTimeout(()=>{
      this.displayStyle = {
        'display':'none'
      };
    }, 100)
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
    this.typeSelected.push(1);
    this.csList.push(cot);
    this.inventoryQList.push(this.inventoryList[i]);
    // for(let other of this.csList) {
    //    console.log(other.ITEM + " " + other.DESCRIPTION + " " + other.PROVIDE + " " + other.CANTITY + " " + other.MEASURE_UNIT + " " + other.SALE_PRICE)
    //  }
    //this.refreshList();
  }

  // refreshList() {
  //   let otherList = new Array<Cotizacion_Service>();
  //   for(let element of this.csList) {
  //     let other = new Cotizacion_Service(element.ITEM,element.DESCRIPTION,element.PROVIDE,element.CANTITY,element.MEASURE_UNIT,element.SALE_PRICE);
  //     console.log(other.ITEM + " " + other.DESCRIPTION + " " + other.PROVIDE + " " + other.CANTITY + " " + other.MEASURE_UNIT + " " + other.SALE_PRICE)
  //     otherList.push(other);
  //   }
  //   this.csList = new Array<Cotizacion_Service>();
  //   this.csList = otherList;
  // }

  addToInventoryList() {
      if(this.otherInventoryItem.DESCRIPTION != "" &&
      this.otherInventoryItem.PRICE != 0 &&
      this.otherInventoryItem.LABOR_PRICE != 0 &&
      this.otherInventoryItem.UNITY_MESURE != "") {

        this.itemIndex = this.itemIndex + 1;
        let cot = new Cotizacion_Service(this.itemIndex,this.otherInventoryItem.DESCRIPTION,this.typeService[0],1,this.otherInventoryItem.UNITY_MESURE,0);
        this.csList.push(cot);
        this.inventoryQList.push(this.otherInventoryItem);
      }
  }

  changeQuantity(val:any, j) {
    //console.log(val)
    if(val >= 1) {
      this.csList[j].CANTITY = val;
      //console.log(this.csList[j].CANTITY)
      this.calculateSubtotal(j);
    }
  }

  changeService(val:any, j) {
    //console.log(val)
    if(val != '') {
      this.csList[j].PROVIDE = val;
      //console.log(this.csList[j].PROVIDE)
      this.calculateSubtotal(j);
    }
  }

  calculateSubtotal(j) {
    if(this.csList[j].PROVIDE == 'Suministro') {
        this.csList[j].SALE_PRICE = this.inventoryQList[j].PRICE * this.csList[j].CANTITY;
    }
    if(this.csList[j].PROVIDE == 'Instalacion') {
        this.csList[j].SALE_PRICE = this.inventoryQList[j].LABOR_PRICE * this.csList[j].CANTITY;
    }
    if(this.csList[j].PROVIDE == 'Suministro e Instalacion') {
      this.csList[j].SALE_PRICE = (this.inventoryQList[j].PRICE * this.csList[j].CANTITY) + (this.inventoryQList[j].LABOR_PRICE * this.csList[j].CANTITY);
    }
    this.csList[j].SALE_PRICE = parseFloat(this.csList[j].SALE_PRICE.toFixed(4));

    //this.csList[j] = new Cotizacion_Service(this.csList[j].ITEM,this.csList[j].DESCRIPTION,this.csList[j].PROVIDE,this.csList[j].CANTITY,this.csList[j].MEASURE_UNIT,this.csList[j].SALE_PRICE);
    this.calculateTotal();
  }

  // saveChanges(j) {
  //   if(this.csList[j].CANTITY >= 1) {
  //     //this.csList[j].CANTITY = this.quantity[j];
  //     //this.csList[j].PROVIDE = this.typeService[j];
  //     //console.log(this.quantity[j])
  //     if(this.csList[j].PROVIDE == 'Suministro') {
  //         this.csList[j].SALE_PRICE = this.inventoryQList[j].PRICE * this.csList[j].CANTITY;
  //     }
  //     if(this.csList[j].PROVIDE == 'Instalacion') {
  //         this.csList[j].SALE_PRICE = this.inventoryQList[j].LABOR_PRICE * this.csList[j].CANTITY;
  //     }
  //     if(this.csList[j].PROVIDE == 'Suministro e Instalacion') {
  //       this.csList[j].SALE_PRICE = (this.inventoryQList[j].PRICE * this.csList[j].CANTITY) + (this.inventoryQList[j].LABOR_PRICE * this.csList[j].CANTITY);
  //     }
  //      this.csList[j].SALE_PRICE = parseFloat(this.csList[j].SALE_PRICE.toFixed(4));
  //     this.calculateTotal();
  //   } else {
  //     alert("No se puede guardar, algún campo en la fila está vacío");
  //   }
  // }

  deleteRow(j) {
    this.csList.splice(j,1);
    this.inventoryQList.splice(j,1);
    //refresh all item indexes
    this.calculateTotal();
  }

  refreshItemIndexes() {
    let index = 1;
    for(let element of this.csList) {
      element.ITEM = index;
      index = index + 1;
    }
    this.itemIndex = index - 1;
  }

  calculateTotal() {
    this.total = 0;
    for (let quoteItem of this.csList) {
      this.total = this.total + quoteItem.SALE_PRICE;
    }
    this.total = parseFloat(this.total.toFixed(4));
  }

  findQuotation() {
    this.cotizacionService.findQuotation(this.quotation._id).subscribe((res: any) =>{
        this.searchQId = res;
    });
  }

  createQuotation() {
    this.now = new Date();
    let dd = ("0" + this.now.getDate()).slice(-2)
    let mm = ("0" + (this.now.getMonth() + 1)).slice(-2)
    let yyyy = this.now.getFullYear();
    let fecha = dd + '/' + mm + '/' + yyyy;

    if(this.quotation._id != "") {
      this.findQuotation();
    } else {
      this.searchQId = null;
    }

    if(this.csList.length > 0 && this.quotation.ADDRESED != "" && this.searchQId == null) {
      this.quotation.COST = this.total;
      this.quotation.COTIZACION_SERVICE = this.csList;
      this.quotation.DATE = fecha;
      //this.quotation._id = yyyy+""+mm+""+dd;
      this.quotation.USER_ID = 10;
      //this.cotizacionService.newQuotation(this.quotation);
      this.displayStyle = {
        'display':'block',
      };
      this.downloadPDF();
    } else {
      if(this.csList.length < 0) alert("Necesitas añadir items a la cotizacion");
      if(this.quotation.ADDRESED == "") alert("Necesitas elegir para quien va dirigido");
      if(this.searchQId != null) alert("El id de cotizacion ya existe");
    }
  }
}
