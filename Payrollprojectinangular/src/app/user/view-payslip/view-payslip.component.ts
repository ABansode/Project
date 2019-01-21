import { Component, OnInit, Input } from '@angular/core';

import { Payslip } from '../view-payslip/Payslip.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserRegistration } from '../UserRegistration.model';
import { LoginService } from '../../login/login.service';
import { MonthlySalaryGenrate } from './MonthlySalaryGenrate.model';

@Component({
  selector: 'app-view-payslip',
  templateUrl: './view-payslip.component.html',
  styleUrls: ['./view-payslip.component.css']
})
export class ViewPayslipComponent implements OnInit {
  abc;
  uname;
  userrid;
  userrid1;
  user=new UserRegistration();



monthlySalaryGenrate=new MonthlySalaryGenrate();
constructor(private _loginService:LoginService,private activateroute:ActivatedRoute,private _userservice:UserService) 
{
  this.activateroute.params.subscribe(routeParam=>{ 
   this.userrid=routeParam.lid;
   this.userrid1=routeParam.lid     
  })
}
  ngOnInit() {
    this.user = this._userservice.takeUserDetaile();
  }
viewPaySlip()
{
  this.monthlySalaryGenrate.userRegistration=this.user; 
  this._userservice.payslipPost(this.monthlySalaryGenrate).subscribe();
    
} 





}
