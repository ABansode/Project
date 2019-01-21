import { Component, OnInit } from '@angular/core';
import { NewAdmin } from '../new-admin.model';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  newAdmin = new NewAdmin();

  constructor(private _adminservice:AdminServiceService) {}

  ngOnInit() {
  }

  div1:boolean=true;
  div2:boolean=false;

 registrationForm=new FormGroup({
  'firstname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'lastname':new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z,A-Z]+')])),
  'address':new FormControl('',Validators.required),
  'email':new FormControl('',Validators.email),
  'mobile':new FormControl('',Validators.compose([Validators.min(1000000000),Validators.max(10000000000),Validators.pattern('[0-9]+')]))
  ,'dateOfBirth':new FormControl('',Validators.required),
  'dateOfJoining':new FormControl('',Validators.required),
  'adminGender':new FormControl('',Validators.required),
  'jobTitle':new FormControl('',Validators.required),
  'basicSalary':new FormControl('',Validators.required),
  'designation':new FormControl('',Validators.required),
  'department':new FormControl('',Validators.required)
})

  adminRegister(){

    console.log('hi');
    console.log(this.newAdmin);
    this._adminservice.postAdmin(this.newAdmin).subscribe(result=>{console.log(result)})
 this.div1=false;
 this.div2=true;
    }
}