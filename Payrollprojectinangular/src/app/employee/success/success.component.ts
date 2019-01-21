import { Component, OnInit, Input } from '@angular/core';
import { UserRegistration } from '../userregistration.model';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
import { UserregistrationService } from '../userregistration.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

 users=new UserRegistration();
  constructor(private _userRegistrationService:UserregistrationService) { }

  ngOnInit() {
this.users=this._userRegistrationService.takeUserDetails();
  }

  @Input() aaa:UserRegistration;

}
