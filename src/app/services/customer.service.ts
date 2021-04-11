import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerDetail } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

    apiUrl ="https://localhost:44349/Customers";


  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "getlist";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  
  getCustomerDetails():Observable<ListResponseModel<CustomerDetail>> {
    let newPath = this.apiUrl + "getcustomerdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(newPath);
  }
  
}