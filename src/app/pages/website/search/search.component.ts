import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { APIResponseModal } from '../../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor(private service:ServiceService) { }
  airportList:any[]=[]
  serachedList:any[]=[]
  fromAirport:number=0;
  toAirport:number=0;
  travelDate:string=''
  ngOnInit(): void {
     this.getAllAirport()
  }
  getAllAirport(){
   
    this.service.getAirport().subscribe((res:APIResponseModal)=>{

    this.airportList=res.data
    console.log("airport list:"+JSON.stringify(this.airportList))
    })
   }

   searchFlight(){
    this.service.getSearchFlights(this.fromAirport,this.toAirport,this.travelDate).subscribe((res:APIResponseModal)=>{

      this.serachedList=res.data
      console.log("serachedList:"+JSON.stringify(this.serachedList))
      })
   }
}
