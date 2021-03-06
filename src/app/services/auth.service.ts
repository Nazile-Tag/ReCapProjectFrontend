  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel, RegisterModel } from '../models/authModel';
import { SingleResponseModel } from '../models/responseModel';
import { TokenDetail, TokenModel } from '../models/tokenModel';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenDetail = new TokenDetail()
  
  apiUrl ="https://localhost:44349/api/Auth/";

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService) { }

  login(loginModel:LoginModel){
    let newPath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, loginModel)
  }

  register(registerModel : RegisterModel){
    let newPath = this.apiUrl + "register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath, registerModel)
  }

  logout(){
    this.storageService.remove("token")
    this.tokenDetail = new TokenDetail()
  }

  decodeToken(token:string){
    let helper = new JwtHelperService()    
    let data = helper.decodeToken(token)    
    this.tokenDetail.email = data.email
    this.tokenDetail.username = data['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']
    this.tokenDetail.claims = data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
  }

  isAuthenticated(){
    let token = this.storageService.get("token")
    if( token ){
      this.decodeToken(token)
      return true;
    }
    return false;    
  }

}