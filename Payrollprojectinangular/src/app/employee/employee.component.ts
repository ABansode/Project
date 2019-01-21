import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
import { EmployeeServiceProfile } from './employee-profile/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
  div5:boolean=false;
  div6:boolean=false;
  div7:boolean=false;

  id;
  constructor( private activateroute:ActivatedRoute,private _router:Router,private _employeeService:EmployeeService,
    private _employeeserviceProfile:EmployeeServiceProfile) {
    this.activateroute.params.subscribe(routeParam=>{this.id=routeParam.uname})
   }

   employee=new Employee();

   companyNames=[];
   abc;
   xyz;
  ngOnInit() {
    
    this._employeeService.getEmployeeDetails(this.id).subscribe(emp=>{this.abc=emp;this.employee=this.abc;
      this._employeeService.getEmployeeRecord(this.employee);
      
    
    });
    
    this._employeeService.getClientCompanyName().subscribe(result=>{this.xyz=result;this.companyNames=this.xyz
    this._employeeService.getCompanyName(this.companyNames);
    
    });
    
  }
  img="./../assets/c.jpeg"
  img1="./../assets/sss.jpg"
  img2="./../assets/img2.gif"
  img3="./../assets/login.jpg"

  display(index){

    switch(index){

      case 1:
      this.repet();
        this.div1=true;
     
        break;
        case 2:
        this.repet();
        this.div2=true;
        
        break;
        case 3:
       this.repet();
        this.div3=true;
        break;

        case 4:
        this.repet();
         this.div4=true;
         break;

         case 5:
         this.repet();
          this.div5=true;
          break;

          case 6:
          this.repet();
           this.div6=true;
           break;

           case 7:
           this.repet();
            this.div7=true;
            break;
 
    }

  }

  repet(){

       this.div1=false;
        this.div2=false;
        this.div3=false;
        this.div4=false;
        this.div5=false;
        this.div6=false;
        this.div7=false;
  }

  
  logOut(){
    this._router.navigate(['login']);
    
  }
}
