import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceProfile {

  constructor(private employeeService:EmployeeService) { }

  getEmployeeDetaile(employee){

    
  }
}
