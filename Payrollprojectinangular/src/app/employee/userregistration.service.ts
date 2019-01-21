import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { UserRegistration } from './userregistration.model';
@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {
  users=new UserRegistration();
  constructor(private _httpclient:HttpClient) { }

  insertUserData(employee){

   return this._httpclient.post("http://localhost:2018/employeeController/insertuserdata",employee)
  }

  
  getUserDetails(user){
    this.users=user;
      }
    
      takeUserDetails(){
        return this.users;
      }
}
