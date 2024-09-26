import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loginuser, User } from '../../../interfaces/interface';
import { ServiceService } from '../../../Services/service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-website-landing',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './website-landing.component.html',
  styleUrl: './website-landing.component.css'
})
export class WebsiteLandingComponent {

  loggerUserdata:any

  constructor(private service:ServiceService){
      const isLocal=localStorage.getItem('flightCustomer')
      if(isLocal !=null){
        this.loggerUserdata=JSON.parse(isLocal)
      }
  }
  openRegModel(){
    const model=document.getElementById('register')
    if(model!=null){
    model.style.display='block'
    }
  }
  closeRegModel(){
    const model=document.getElementById('register')
    if(model!=null){
    model.style.display='none'
    }
  }
  openLoginModel(){
    const model=document.getElementById('login')
    if(model!=null){
    model.style.display='block'
    }
  }
  closeLoginModel(){
    const model=document.getElementById('login')
    if(model!=null){
    model.style.display='none'
    }
  }
  name:string=''
  contactNo:string=''
  email:string=''
  city:string=''
  password:string=''
  address:string=''

  // user:any=new User(this.name,this.contactNo,this.email,this.city,this.address,this.password)
   


  Register(){
    let user=new User(this.name,this.contactNo,this.email,this.city,this.address,this.password)
    console.log(user)
      this.service.userRegister(user).subscribe((res:any)=>{
         if(res.result){
          alert('Registered Successfully')
          this.closeRegModel()
         }
         else{
          alert(res.message)
         }
      })
   
  }
  useremail:string='';
 userpw:string='';
  login(){
  let loginUser=new loginuser(this.useremail,this.userpw)
  console.log(loginUser)
  if(loginUser.email !='' && loginUser.password !=''){
  this.service.userLogin(loginUser).subscribe((res:any)=>{
    if(res.result){
     alert('Login Successfully')
     this.loggerUserdata=res.data
     localStorage.setItem('flightCustomer',JSON.stringify(res.data))
     this.closeLoginModel()
    }
    else{
     alert(res.message)
    }
 })
}
else{
  alert('Please Enter Email and Password')
}
  }
  logOff(){
    localStorage.removeItem('flightCustomer')
  }
}


