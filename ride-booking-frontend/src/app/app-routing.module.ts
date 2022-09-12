import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,title: 'Login Page'},
  {path:'register',component:RegisterComponent,title: 'Registration Page'},
  {path:'home',component:HomeComponent,title: 'Home Page'},
  {path:'',component:LandingPageComponent,title: 'Ride Booking Application'},
  {path:'booking',component:BookingComponent,title: 'Booking Page'},
  {path:'feedback',component:FeedbackComponent,title: 'Feedback Page'},
  {path:'forgot',component:ForgotPasswordComponent,title: 'Reset Password'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
