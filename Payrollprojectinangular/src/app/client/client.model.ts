
import { UserRegistration } from '../user/UserRegistration.model';
import { Login } from '../login/login.model';
export class Client{
     client_id:number;
	 client_name:string;
	 client_contact:number;
      client_email:string;
      client_location:string;
      logo:Blob;
     login:Login;
   
     UserRegistration:UserRegistration[];

}



