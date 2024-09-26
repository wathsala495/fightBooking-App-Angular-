import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { APIResponseModal } from '../../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent implements OnInit {

  constructor(private service:ServiceService) { }
  airportList:any=[]
 

  ngOnInit(): void {
     this.getAllAirport() 
  }

  getAllAirport(){
   
     this.service.getAirport().subscribe((res:APIResponseModal)=>{
     this.airportList=res.data
     console.log("airport list:"+JSON.stringify(this.airportList))
     })
    }
    addNewAirport(){
      let obj={
        airportCode:'',
        airportId:0,
        airportName:'',
        cityId:0,
        cityName:''
      }
      this.airportList.unshift(obj)
    }



    bulkUpdateAirport(){


    this.service.addUpdateBulkAirports(this.airportList).subscribe((res:any)=>{
       if(res.result){
        alert("airport updated successfully")
        console.log("airpoerList:"+JSON.stringify(this.airportList))
        this.getAllAirport()
       }
       else{
        alert(res.message)
       }
    })
  }
  onDelete(id:number){
    this.service.deleteAirportById(id).subscribe((res:any)=>{
      console.log(res)
      if(res.result){
       alert("airport deleted successfully")
      }
      else{
       alert(res.message)
      }
      this.getAllAirport()
   })
  }


}
