import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // baseUrl="http://localhost:8080/api/v1.0/rideapp/register";
  constructor(private httpClient:HttpClient) { }

  registerUser(user:User):Observable<object>{
    // console.log(user);
    // return this.httpClient.post(`${this.baseUrl}`,user);
    return this.httpClient.post("http://localhost:8080/api/v1.0/rideapp/register",user);
  }
  loginUser(user:User):Observable<object>{
    // console.log(user);
    return this.httpClient.post("http://localhost:8080/api/v1.0/rideapp/login",user);
  }
  // forgotPwd(user:User):Observable<object>{
  //   // console.log(user);
  //   return this.httpClient.post("http://localhost:8080/api/v1.0/rideapp/forgot",user);
  // }
}
