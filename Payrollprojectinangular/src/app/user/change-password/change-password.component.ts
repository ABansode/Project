import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserRegistration } from '../UserRegistration.model';
import { Router } from '@angular/router';
import { Login } from '../../login/login.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  user=new UserRegistration();
  login=new Login();
  
  constructor(private _userservice:UserService,private router: Router) { }
  oldPassword:string;
  confirmPassword:boolean=true;
  changePassword:boolean=false;
 
  abc;
  newPassword:String;
  abc1;
  abc2:String;

  ngOnInit() {

    this.user= this._userservice.takeUserDetaile();
    console.log(this.user);
  }



  confirm(){
    this._userservice.confirmPassword(this.oldPassword).subscribe(result=>{
      this.abc=result;
     console.log("result:="+this.abc);
      if(this.abc==true){
        this.changePassword=true;
        
        this.confirmPassword=false;
      }
     
    })
  }
  
  changepass() {
    this._userservice.changepassword(this.user.login).subscribe(result=>{
      this.abc1=result;
      this.login=this.abc1;
      console.log("result"+this.login);
     
    })
    
  
  }
 

}
