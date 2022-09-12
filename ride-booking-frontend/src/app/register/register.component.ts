import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user:User=new User();
  msg='';
  constructor(private registerService:RegisterService ,private route:Router) { }

  ngOnInit(): void {
  }
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("User has registered successfully!!");
      this.route.navigate(['/login']);
    },error=>{alert("Sorry user is not registered");
  this.msg=error.error;});
  }

}
