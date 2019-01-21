import { Component, OnInit } from '@angular/core';
import {AdminServiceService } from '../admin-service.service';
import {NewAdmin }from '../new-admin.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  EditRowId:any='';
  admin =new NewAdmin();
  adminedit =new NewAdmin();
  result;
  id;
  welcomeProfile:boolean=true; 
  img="./../../assets/admin.jpg";

  constructor( private activatedRoute:ActivatedRoute,private _route:Router,private _adminService:AdminServiceService) { 
    this.activatedRoute.params.subscribe(routeParam=>{this.id=routeParam.firstname})
    console.log(this.id+"  welcome Id"+this.id);
  }
  ngOnInit() {
    this._adminService.getAdmin(this.id).subscribe(result1=>{ this.result=result1;});
  }

updateAdminProfile(){
  
  this._adminService.postAdmin(this.result).subscribe(result=>{console.log(result)});
  this.welcomeProfile=true;
  window.location.reload();

  this.welcomeProfile=true;
}


Edit(val){
  this.EditRowId=val;
}
}
