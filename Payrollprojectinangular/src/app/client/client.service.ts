import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import {Client } from './client.model';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client=new Client();
  aurl:string="http://localhost:2018/cwelcome"


  uurl:string="http://localhost:2018/cwelcome/getUsers"

  lid;
  constructor(private _httpClientWork:HttpClient) { }

  getClient(id)
  {
    const url=`${this.aurl}/${id}`;
     console.log("method call at controller",url);
    //return this._httpClientWork.post<Client>(this.url)
    console.log(this._httpClientWork.get(url));
    return this._httpClientWork.get(url);
  }

  getId1(Id) //routing id
  {
    this.lid=Id;
    console.log(this.lid);
  }
  getId(abc) //label hit like profile....
  {
  this.client=abc;
  console.log(this.client)
  }
  takeItFor()//client object return
  {
    console.log(this.client);
 return this.client;
  }
//===================================================================//
  getUser(cid)//leave mgnt
  {
    const url=`${this.uurl}/${cid}`;
     console.log("method call at controller users",url);
    //return this._httpClientWork.post<Client>(this.url)
    console.log(this._httpClientWork.get(url));
    return this._httpClientWork.get(url);
  }
}
