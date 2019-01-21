import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }

  postLogin(login){

    return this._httpClient.post("http://localhost:2018/loginController/",login);
  }
}