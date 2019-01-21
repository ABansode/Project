import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  firstname;

  constructor(private activatedRoute:ActivatedRoute,private _route:Router) { 
    this.activatedRoute.params.subscribe(routeParam=>{this.firstname=routeParam.id})
    console.log(this.firstname);
  }

  ngOnInit() {

  }
  
  img="./../assets/c.jpeg"
  img1="./../assets/sss.jpg"
  img2="./../assets/img2.gif"
  img3="./../assets/login.jpg"
   
  isbodybackground=true
  isProfileVisible=false
  isEmpRegVisible=false
  isNewAdminVisible=false
  isATRGVisible=false
  isEmpdetailsVisible=false

  profile()
  {
   this.isbodybackground=false
    this.isProfileVisible=true
    this.isEmpRegVisible=false
    this.isNewAdminVisible=false
     this.isATRGVisible=false
     this.isEmpdetailsVisible=false;
    }
  empReg()
  {
    this.isProfileVisible=false
    this.isEmpRegVisible=true
    this.isNewAdminVisible=false
    this.isATRGVisible=false
    this.isEmpdetailsVisible=false;
    this.isbodybackground=false
  }
  newAdmin()
  {
    this.isProfileVisible=false
    this.isEmpRegVisible=false
    this.isNewAdminVisible=true
    this.isATRGVisible=false
    this.isEmpdetailsVisible=false;
    this.isbodybackground=false
  }



  ATRG()
  {
    this.isProfileVisible=false
    this.isEmpRegVisible=false
    this.isNewAdminVisible=false
    this.isATRGVisible=true
    this.isEmpdetailsVisible=false;
    this.isbodybackground=false
  }


  employeedeatils()
  {
    this.isProfileVisible=false
    this.isEmpRegVisible=false
    this.isNewAdminVisible=false
    this.isEmpdetailsVisible=true
    this.isATRGVisible=false;
    this.isbodybackground=false
  }

  logout(){
    this._route.navigate(['login']);
  }
}
