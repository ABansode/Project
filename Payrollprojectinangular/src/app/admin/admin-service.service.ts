import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { NewAdmin } from './new-admin.model';
import { Employeeregistration } from './employee-registration/employee-registration.model';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
admin = new NewAdmin();
  
  constructor(private _httpclient:HttpClient) { }

  insertEmpData(employeeRegistration){

   return this._httpclient.post("http://localhost:2018/welcome_admin/insertemployee",employeeRegistration)
  }
    
  postAdmin(newAdmin){

    return this._httpclient.post("http://localhost:2018/welcome_admin/insert",newAdmin);
  }
  getfile(salaryslipstructure){

    return this._httpclient.get("http://localhost:2018/welcome_admin/postrpdf",salaryslipstructure)
  }
  getAdmin(id){
    id;
    return this._httpclient.get("http://localhost:2018/welcome_admin/getadmin/"+id)
     }
  getAllEmployee(){

     return this._httpclient.get("http://localhost:2018/welcome_admin/employeedetails")

  }
  employeeGenrateMontlySalary(monthlySalary){
     console.log("helllo")
    return this._httpclient.post("http://localhost:2018/welcome_admin/monthlysalarydetails/",monthlySalary)
 }
 getEmployeeId(id)
 {
   console.log("inside get======================"+id);
   
   return this._httpclient.get<Employeeregistration>("http://localhost:2018/welcome_admin/getEmployee"+"/"+id)
 
 }

updateemp(editnewEmployee)
{
  console.log("inside update")
  return this._httpclient.put("http://localhost:2018/welcome_admin/updateemployee",editnewEmployee)

}
deleteEmp(id)
{
  console.log("inside delete=="+id);
  
  return this._httpclient.delete("http://localhost:2018/welcome_admin/deleteEmployee"+"/"+id)
}


}
