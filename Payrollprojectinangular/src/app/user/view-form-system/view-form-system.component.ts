import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserRegistration } from '../UserRegistration.model';
import { FormSixteen } from './FormSixteen.model';

@Component({
  selector: 'app-view-form-system',
  templateUrl: './view-form-system.component.html',
  styleUrls: ['./view-form-system.component.css']
})
export class ViewFormSystemComponent implements OnInit {
  user=new UserRegistration();
  FormSixteen=new FormSixteen();
  data;
  constructor(private _userservice:UserService) { }

  ngOnInit() {
    this.user = this._userservice.takeUserDetaile();
    console.log(this.user);
  }

  formsixteen()
  {
    this.FormSixteen.userRegistration=this.user;
    console.log(this.FormSixteen.userRegistration.userrid);
    this._userservice.formSixteen(this.FormSixteen.userRegistration.userrid).subscribe();
  
  }

 

  






}
