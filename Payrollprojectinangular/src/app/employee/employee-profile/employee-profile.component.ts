import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

employee=new Employee();
abc;

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
   this.employee=this._employeeService.getempt();
   
  }

}
