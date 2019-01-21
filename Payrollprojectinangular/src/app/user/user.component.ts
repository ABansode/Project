import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserRegistration } from './UserRegistration.model';

import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id;
  abc;
  user = new UserRegistration();
  
  InvestmentDeclaration:boolean=false;
  PersonalDetails:boolean=false;
  ViewPayslip:boolean=false;
  ViewIncomeTaxReport:boolean=false;
  ViewFormSystem:boolean=false;
  Notification:boolean=false;
  ChangePassword:boolean=false;
  Feedback:boolean=false;
 
  constructor(public router: Router,private activateroute:ActivatedRoute,private _user:UserService) {
    this.activateroute.params.subscribe(routeParam=>{
      this.id=routeParam.lid;  
      this._user.getid(routeParam.lid);
    })
   }
  ngOnInit() {
    this._user.showPersonalDetails(this.id).subscribe(result=>{
      this.abc=result;  
      this.user=this.abc;
    this._user.getUserDetaile(this.user);
    })

  }
  img="./../assets/c.jpeg"
  img1="./../assets/sss.jpg"
  img2="./../assets/img2.gif"
  img3="./../assets/login.jpg"

  oncheck(index){
    switch(index){
    case 1:
      this.reset();
      console.log("in registration")
      this.InvestmentDeclaration=true;
      break;
    case 2:
      this.reset();
      this.PersonalDetails=true;
      break;
    case 3:
      this.reset();
      this.ViewPayslip=true;
      break;
    case 4:
      this.reset();
      this.ViewIncomeTaxReport=true;
      break;
    case 5:
      this.reset();
      this.ViewFormSystem=true;
      break;
    case 6:
      this.reset();
      this.Notification=true;
      break;
    case 7:
      this.reset();
      this.ChangePassword=true;
      break;
    case 8:
      this.reset();
      this.Feedback=true;
      break;
    }

  }
  reset(){
    this.InvestmentDeclaration=false;
    this.PersonalDetails=false;
    this.ViewPayslip=false;
    this.ViewIncomeTaxReport=false;
    this.ViewFormSystem=false;
    this.Notification=false;
    this.ChangePassword=false;
    this.Feedback=false;
  }
}
