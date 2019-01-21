import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee=new Employee();

 
 prourl:string="http://localhost:2018/employeeController/getEmployeeDetails";
  constructor(private _httpClient:HttpClient) { }

  getEmployeeDetails(employeeId){

  const url = `${this.prourl}/${employeeId}`;

  return this._httpClient.get(url);

  }
  

  getEmployeeRecord(xyz){
  this.employee= xyz;
    
  }
  getempt(){
return this.employee;
  }
 
sendSalaryDetails(payRollProcessing){

 return this._httpClient.post("http://localhost:2018/employeeController/getSalaryDetails",payRollProcessing);
}

sendDataforGenrateMontlySalary(monthlySalary){

  return this._httpClient.post("http://localhost:2018/employeeController/sendDataforGenrateMontlySalary",monthlySalary);
}

sendClientOnbordingData(clientOnbording){

  return this._httpClient.post("http://localhost:2018/clientonbording/getClintOnbordinData",clientOnbording).subscribe();
}

getClientCompanyName(){

  return this._httpClient.get("http://localhost:2018/employeeController/getClientCompanyName");
}

  company;
  getCompanyName(companyNames){
this.company=companyNames;

  }

  takeCompanyName(){
    return this.company;
  }

}


