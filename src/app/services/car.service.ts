import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = "https://localhost:44349/api/"

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByCar(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getbycar?id=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDtoById(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "cars/getcardtobyid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  add(car: Car): Observable<ResponseModel> {
    let addPath = this.apiUrl + "cars/add";
    return this.httpClient.post<ResponseModel>(addPath, car)
  }

  getCarDetailsById(carId:number):Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "getcardetailsbyid?id=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  
}

}
