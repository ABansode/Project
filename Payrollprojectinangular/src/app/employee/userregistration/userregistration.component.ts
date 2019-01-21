import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { UserregistrationService } from '../userregistration.service';
import { UserRegistration } from '../userregistration.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  name;
  message:string;
  abc;
  xyz:boolean;
  div1:boolean=true;
  div2:boolean=false;
  userRegistration=new UserRegistration();
 employee=new Employee();
 pqr;
 companyNames=[];
  constructor(private _userRegistrationService:UserregistrationService,private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._userRegistrationService.getUserDetails(this.userRegistration);
    this.pqr=this._employeeService.takeCompanyName();
   this.companyNames=this.pqr;
  }
registrationForm=new FormGroup({
  'firstname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'lastname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'address':new FormControl('',Validators.required),
  'email':new FormControl('',Validators.email),
  'mobile':new FormControl('',Validators.compose([Validators.min(1000000000),Validators.max(10000000000),Validators.pattern('[0-9]+')]))
  ,'dateOfBirth':new FormControl('',Validators.required),
  'dateOfJoining':new FormControl('',Validators.required),
  'userGender':new FormControl('',Validators.required),
  'jobTitle':new FormControl('',Validators.required),
  'basicSalary':new FormControl('',Validators.required),
  'designation':new FormControl('',Validators.required),
  'department':new FormControl('',Validators.required),
  'companyName':new FormControl('',Validators.required)
})

register(){

 this._userRegistrationService.insertUserData(this.userRegistration).subscribe(result=>{this.abc=result;
this.xyz=this.abc;


 
if(this.xyz){
  
 this.name=this.userRegistration;
 this.div1=false;
 this.div2=true;
}
else{
  console.log(this.xyz)
  this.message="Email is already Use in another User";
  this.div1=true;
  this.div2=false;

}

})
}
}
