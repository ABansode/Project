import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-payrollprocessing',
  templateUrl: './payrollprocessing.component.html',
  styleUrls: ['./payrollprocessing.component.css']
})
export class PayrollprocessingComponent implements OnInit {

  div1:boolean=true;
  div2:boolean=false;
  constructor(private _employeeService:EmployeeService) { }


  ngOnInit() {
  }


  Earnings=['gradePay','DA','HRA','TA'];
  Deductions=['incomeTax','PF','PT','LIC','RD','insurance'];
  afterSelection=[];

  collect(beforeSelections){
    this.afterSelection.push(beforeSelections);
    
  }
  submit(){

   
    
    this._employeeService.sendSalaryDetails(this.afterSelection).subscribe();
   
    this.div1=false;
    this.div2=true;
  
    
  }
}
