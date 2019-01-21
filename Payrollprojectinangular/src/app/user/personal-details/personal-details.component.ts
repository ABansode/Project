import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserRegistration   } from '../UserRegistration.model';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  user=new UserRegistration();
  constructor(private _userservice:UserService) { }
  ngOnInit() {
  this.user= this._userservice.takeUserDetaile();
  console.log(this.user);
  }  
}
