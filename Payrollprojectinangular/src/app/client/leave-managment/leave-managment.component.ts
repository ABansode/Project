import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from '../client.model';
import { UserRegistration } from '../../user/UserRegistration.model';
@Component({
  selector: 'app-leave-managment',
  templateUrl: './leave-managment.component.html',
  styleUrls: ['./leave-managment.component.css']
})
export class LeaveManagmentComponent implements OnInit {
    id;
    uid;
    abc;
    lid;
    client=new Client();
    user1 =new UserRegistration();
    User: UserRegistration[];
    isTableDataVisible:boolean=false;
    isSingleDataVisible:boolean=false;

  constructor(public router: Router, private activateroute:ActivatedRoute,private _clientService:ClientService) {
  
  
    this.activateroute.params.subscribe(routeParam=>{
      this.id=routeParam.lid;
      console.log("client leave comp :"+this.id);
      this._clientService.getId1(routeParam.lid);
    })
    console.log("lev Cons",this.id);
   
  }

  ngOnInit() {
    // this._clientService.getClient(this.id).subscribe(clientId=>{
    //   this.abc=clientId;
    //   this.client=this.abc;
    //   console.log("leave  compo",this.client.client_id);
    //   console.log("viru"+this.client.UserRegistration);
    //  this._clientService.getId(this.client);
    this._clientService.getUser(this.id).subscribe(clientId=>{
      this.abc=clientId; 
      console.log(this.abc);
    this.User=this.abc;
     this._clientService.getId(this.client);  
  });
  }
  changePages(index){
    switch(index){
        case 1:
            this.reset();
            this.isTableDataVisible=true;
            break;
        case 2:
            this.reset();
            this.isSingleDataVisible=true;
            break;
         }
  }

  reset(){
    this.isTableDataVisible=false;
    this.isSingleDataVisible=false;
    }


}
