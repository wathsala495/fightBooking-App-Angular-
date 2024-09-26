import { Component } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ RouterModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  password:string=''
  email:string=''
  
  constructor(private service:ServiceService,private router:Router){

 }
 

 onLogin(){

  const loginObj={
    email:this.password,
    password:this.email
   }
   this.service.login(loginObj).subscribe((res:any)=>{
     if(res.result){
        localStorage.setItem('flightUser',JSON.stringify(res.data))
        this.router.navigateByUrl('/city')
        alert("Login Suceefull")
     }else{
      alert(res.message)
     }
   })
 }

}
