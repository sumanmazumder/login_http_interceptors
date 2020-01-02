import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { loginInterface } from '../interface/loginInterface';
import store from "store";
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public user: loginInterface;
  public apiToken : string = store.get("apiToken");
  constructor( private apiServive : ApiService, private http: HttpClient) { }
  public login(payload: FormData){
    const url = this.apiServive.getUrl("login");
    return this.http.post<loginInterface>(url, payload);
  }
  public setUser(user: loginInterface){
    console.log(user);
    this.apiToken = user.token;
    store.set("apiToken", user.token);
  }
}
