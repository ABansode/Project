import { Component, OnInit } from '@angular/core';
import { ClientOnbording } from './ClientOnbording.model';
import {FormControl,FormGroup} from '@angular/forms'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-clientonbording',
  templateUrl: './clientonbording.component.html',
  styleUrls: ['./clientonbording.component.css']
})
export class ClientonbordingComponent implements OnInit {

  clientOnbording=new ClientOnbording();

  constructor(private _employeeService:EmployeeService) { }

  registrationForm=new FormGroup({
'companyCode':new FormControl(),
'companyUrl':new FormControl(),
'expireyDate':new FormControl(),
'companyAddress':new FormControl()
})

  ngOnInit() {
  }

  register(){
   this._employeeService.sendClientOnbordingData(this.clientOnbording);
    
  }

}
