import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental, RentalDetail } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

    apiUrl ="https://localhost:44349/api/Rentals";


  constructor(private httpClient: HttpClient) { }

  add(rental:Rental):Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ListResponseModel<CarDetail>>(newPath, rental);
  }

  getRentals():Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getlist";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getById(id:number):Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "getbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  isCarAvailable(carId:number):Observable<boolean> {
    let newPath = this.apiUrl + "iscaravailable?carId=" + carId;
    return this.httpClient.get<boolean>(newPath);
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetail>> {
    let newPath = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }  

}