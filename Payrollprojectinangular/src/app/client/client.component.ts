import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientService } from '../client/client.service';
import { Client } from './client.model';
import { ReportsGenerationComponent } from './reports-generation/reports-generation.component';
import { TaxDeclarationInfoComponent } from './tax-declaration-info/tax-declaration-info.component';
import { ProfileComponent } from './profile/profile.component';


const routes=[{path:'profile',component:ProfileComponent},
              {path:'report-gen',component:ReportsGenerationComponent},
              {path:'tax',component:TaxDeclarationInfoComponent}
              
             ]
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
 // uname;
  lid;
  abc;
 // login=new Login();
  Profile:boolean=false;
  LeaveManagment:boolean=false;
  ReportsGeneration:boolean=false;
  TaxDeclarationInfo:boolean=false;
  client=new Client();
  id;
  constructor(public router: Router, private activateroute:ActivatedRoute,private _clientService:ClientService) {
    this.activateroute.params.subscribe(routeParam=>{
      this.id=routeParam.lid;
      console.log("client comp :"+this.id);
      this._clientService.getId1(routeParam.lid)
    })
    console.log(this.id);
   
  }

  ngOnInit() {
  // this._clientService.getClient(this.id).subscribe(clientId=>{
  //   this.abc=clientId;
  //   this.client=this.abc;
  //   console.log("compo",this.client);
  //   this._clientService.getId(this.client);
//});

 //this._clientService.getClient(this.id).subscribe();
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
      this.Profile=true;
      break;
    case 2:
      this.reset();
      this.LeaveManagment=true;
      break;
    case 3:
      this.reset();
      this.ReportsGeneration=true;
      break;
    case 4:
      this.reset();
      this.TaxDeclarationInfo=true;
      break;
    }

  }
  reset(){
    this.Profile=false;
    this.LeaveManagment=false;
    this.ReportsGeneration=false;
    this.TaxDeclarationInfo=false;
  }

  logOut(){
    this.router.navigate(['login']);
    
  }
}
