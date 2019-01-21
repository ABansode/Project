import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { MonthlySalary } from './monthelysalary.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-genratesalary',
  templateUrl: './genratesalary.component.html',
  styleUrls: ['./genratesalary.component.css']
})
export class GenratesalaryComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
  }
  monthlySalary=new MonthlySalary();

registrationForm=new FormGroup({

  'monthelySalaryId': new FormControl(),
  'numberOfDays':new FormControl(),
  'month':new FormControl(),
  'year':new FormControl()
})

months=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'];
years=[2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];

sendDataforGenrateMontlySalary(){
 this._employeeService.sendDataforGenrateMontlySalary(this.monthlySalary).subscribe();

}
}
