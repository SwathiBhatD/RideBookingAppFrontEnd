import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  user:User=new User();
 
  constructor(private registerService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }
  // forgotpassword(){
  //   this.registerService.forgotPwd(this.user).subscribe(data=>{
  //     alert("Password updated successfully");
  //     this.route.navigate(['/login']);
  //   },
  //   error=>{alert("Password is not updated");
    

  // }
  //   );
  // }
}
