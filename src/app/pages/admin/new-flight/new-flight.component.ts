import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { APIResponseModal, flight } from '../../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-flight',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-flight.component.html',
  styleUrl: './new-flight.component.css'
})
export class NewFlightComponent implements OnInit {

  loggeddata:any={}
 
 airportList:any=[]
 fightlist:any=[]

 flightId:number= 0;
 flightNumber: string='';
 departureAirportId:number= 0
 departureTime: string='';
 arrivalAirportId:number= 0
 arrivalTime: string='';
 price:number= 0
 totalSeats:number= 0;
 flightVendorId:number=0
 travelDate:string=''

  constructor(private service:ServiceService){
    const localData=localStorage.getItem('flightUser');
    if(localData!=null){
      this.flightVendorId=JSON.parse(localData).venderId
    }
   }

  

 fightObj:any={
  
  
  flightId: 0,
  flightNumber: "string",
  departureAirportId: 0,
  departureTime: "string",
  arrivalAirportId: 0,
  arrivalTime: "string",
  price: 0,
  totalSeats: 0,
  flightVendorId: 0,
  travelDate: "2024-09-25T08:25:45.972Z"
 }

  

 

 ngOnInit(): void {
     this.getAllAirport()
 }

 getAllAirport(){
   
  this.service.getAirport().subscribe((res:APIResponseModal)=>{
  this.airportList=res.data
  console.log("airport list:"+JSON.stringify(this.airportList))
  })
 }
 loadFlights(){
  this.service.getAllFlights().subscribe((res:APIResponseModal)=>{

    this.fightlist=res.data
    console.log("fightlist:"+JSON.stringify(this.fightlist))
    })
}

 onSaveFlight(){

 let  fObj=new flight(this.flightId,this.flightNumber,this.departureAirportId,this.departureTime,this.arrivalAirportId,this.arrivalTime,this.price,this.totalSeats,this.flightVendorId,this.travelDate)
 console.log("fObj:"+JSON.stringify(fObj))
  this.service.getAllFlights().subscribe((res:APIResponseModal)=>{

    this.fightlist=res.data
    console.log("fightlist:"+JSON.stringify(this.fightlist))
    })
  const obj=[]
  ;
  obj.push(fObj)
  // this.fightlist.push(fObj)
  
  this.service.addUpdateBulkFlights( obj).subscribe((res:APIResponseModal)=>{
    if(res.result){
      alert("Flight Added Successfully")
    }
    else{
      alert(res.message)
    }
    })
    this.loadFlights()
 }
}
