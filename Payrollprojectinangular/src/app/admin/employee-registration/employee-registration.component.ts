import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { AdminServiceService } from '../admin-service.service';
import { Employeeregistration } from './employee-registration.model';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})

export class EmployeeRegistrationComponent implements OnInit {
  name;

  img="./../assets/img1.jpg"
  div1:boolean=true;
  div2:boolean=false;
  employeeRegistration=new Employeeregistration();

  constructor(private _employeeRegistrationService:AdminServiceService) { }

  ngOnInit() {
  }
registrationForm=new FormGroup({
  'firstname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'lastname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'address':new FormControl('',Validators.required),
  'email':new FormControl('',Validators.email),
  'mobile':new FormControl('',Validators.compose([Validators.min(1000000000),Validators.max(10000000000),Validators.pattern('[0-9]+')])),
  'dateOfBirth':new FormControl('',Validators.required),
  'dateOfJoining':new FormControl('',Validators.required),
  'employeeGender':new FormControl('',Validators.required),
  'basicSalary':new FormControl('',Validators.required),
  'designation':new FormControl('',Validators.required),
  'department':new FormControl('',Validators.required),
  // 'employeePackage':new FormControl('',Validators.required)
})

register(){

 this._employeeRegistrationService.insertEmpData(this.employeeRegistration).subscribe(result=>{console.log(result)})
 
 this.name=this.employeeRegistration;
 this.div1=false;
 this.div2=true;
console.log(this.employeeRegistration,this.employeeRegistration.basicSalary);
}
}