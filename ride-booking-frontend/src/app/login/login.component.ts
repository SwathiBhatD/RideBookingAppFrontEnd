import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  message='';
  constructor(private registerService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }
  userLogin(){
    
    this.registerService.loginUser(this.user).subscribe(data=>{
      alert("User has logged in successfully ");
      this.route.navigate(['/home']);
    },
    error=>{alert("Sorry user is not logged in");
    this.message="Please enter correct email and password";

  }
    );
  }
  }
  