import { Component, OnInit } from '@angular/core';
// import { ServiceService } from '../../../Services/service.service';
import { APIResponseModal, city, Icity } from '../../../interfaces/interface';
import { HttpClient } from '@angular/common/http';
import {  provideHttpClient } from '@angular/common/http';
import { ServiceService } from '../../../Services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
 
  
})
export class CityComponent implements OnInit {
  constructor(private service:ServiceService) {}
  cityList:any[]=[]
  

  ngOnInit(): void {
    this.getAllCity()
  }

  getAllCity(){
  // this.http.get('/api/FlightBooking/GetAllCity') .subscribe((res:any) =>{
  //   this.cityList=res.data
  //   console.log("list:"+JSON.stringify(this.cityList))
  // });
   this.service.getCities().subscribe((res:APIResponseModal)=>{
   this.cityList=res.data
   console.log("list:"+JSON.stringify(this.cityList))
   })
  }
  addNewCity(){
    let obj={
      cityId:0,
      cityName:''
    }
    this.cityList.unshift(obj)
  }
  bulkUpdateCity(){

    this.service.AddUpdateBulkCity(this.cityList).subscribe((res:any)=>{
       if(res.result){
        alert("city updated successfully")
       }
       else{
        alert(res.message)
       }
    })

  //   let newCity=new city(id,cityname)

  //   this.service
  // .AddUpdateBulkCity(newCity)
  // .subscribe(hero =>this.cityList.push(hero));
  }
}
