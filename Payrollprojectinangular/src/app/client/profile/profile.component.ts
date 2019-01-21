import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import {Login} from '../../login.model';
import {ClientService} from '../client.service';
import { Client } from '../client.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  abc;
  client=new Client();
  id;
  lid;
  constructor(public router: Router, private activateroute:ActivatedRoute,private _clientService:ClientService) {
    this.activateroute.params.subscribe(routeParam=>{this.id=routeParam.lid})
    console.log("profile compont"+this.id);
   
  }
  ngOnInit() {
  //  this.lid=this._clientService.takeItFor();
  // this._clientService.getClient(this.id).subscribe();
  // this.client=this._clientService.takeItFor();
  // console.log(this.client);
  //   console.log("profile Compoents", this.id);

//to getClient()---- use for get the client profile
  this._clientService.getClient(this.id).subscribe(clientId=>{
    this.abc=clientId;
    this.client=this.abc;
    console.log("profile compo",this.client);
    this._clientService.getId(this.client);
 });
}
}
