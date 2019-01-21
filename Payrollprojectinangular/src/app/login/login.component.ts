import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    login=new Login();
    choice;
    constructor(public router: Router,private _loginservice:LoginService) {}

    ngOnInit() {}

    onLoggedin() {
        
        this._loginservice.postLogin(this.login).subscribe(result=>{this.choice=result
       
         switch(this.choice){

             case 101: 
             this.router.navigate(['admin',this.login.login_id]);
         break;
             case 102:
            this.router.navigate(['employee',this.login.login_id]);
         break;
             case 103: 
            this.router.navigate(['user',this.login.login_id]);
         break;
             case 104:
             this.router.navigate(['client',this.login.login_id]);
         break;

         }  
        })
    }
}