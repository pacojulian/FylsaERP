import {Cotizacion_Service} from './cotizacion-service';

export class Quotation {
  constructor(
    public _id: string,
    public DATE: string,
    public COMPANY: string,
    public ADDRESED: string,
    public REASON: string,
    public COST: number,
    public DELIVERY_TIME: string,
    public PAYMENT_CONDITIONS: string,
    public COTIZACION_SERVICE: Cotizacion_Service[],
    public USER_ID: number
  ){}
}
