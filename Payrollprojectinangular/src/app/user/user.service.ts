import { Injectable } from '@angular/core';

import { UserRegistration } from './UserRegistration.model';
import {HttpClient} from '@angular/common/http';
import { MonthlySalaryGenrate } from './view-payslip/MonthlySalaryGenrate.model';
import { FormSixteen } from './view-form-system/FormSixteen.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
lid;
flag:Boolean;
user =new UserRegistration();
// user1 = new UserRegistration();
aurl:String="http://localhost:2018/user/userPersonalDetails";
  
constructor(private _httpclient:HttpClient) { }

getid(id){
  this.lid=id;
}

getUserDetaile(userdetails){
this.user=userdetails;
}
takeUserDetaile(){
return this.user;
}
//=========================================presonal details================================//
showPersonalDetails(id){
  return this._httpclient.get<UserRegistration>(this.aurl+'/'+id) 
}
//===========================================pay slip======================================//
payslipPost(monthlySalaryGenrate){
  console.log(monthlySalaryGenrate);
  return  this._httpclient.post("http://localhost:2018/user/userPayslip",monthlySalaryGenrate);
}
//=========================================old pass=======================================//
confirmPassword(oldPassword){
  console.log("oldPassword:="+oldPassword);
  return this._httpclient.get("http://localhost:2018/user/confirmPassword/"+oldPassword);
}
//=========================================new pass=======================================//
changepassword(login){
  console.log("new password:="+login.login_pass)
 return this._httpclient.post("http://localhost:2018/user/changepass/",login);
}
//========================================form sixteen====================================//
formSixteen(FormSixteen){
  console.log(FormSixteen); 
 return this._httpclient.get("http://localhost:2018/user/formsixteen1/"+FormSixteen);
}

}
