import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})

export class PaymentService {

    apiUrl ="https://localhost:44349/api/Payments";

  constructor(private httpClient: HttpClient) { }

  payment(payment:Payment):Observable<ResponseModel> {    
    let paymentPath = this.apiUrl + "payment"
    return this.httpClient.post<ResponseModel>(paymentPath, payment)
  }

  getCardListByCustomerId(customerId:number):Observable<ListResponseModel<Card>> {
    let newPath = this.apiUrl + "listcards?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

  savecard(payment:Payment):Observable<ResponseModel> { 
    let cardPath = this.apiUrl + "savecard"
    return this.httpClient.post<ResponseModel>(cardPath, payment)       
  }

}