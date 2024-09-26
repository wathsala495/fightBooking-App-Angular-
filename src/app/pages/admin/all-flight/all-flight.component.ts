import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Services/service.service';
import { APIResponseModal } from '../../../interfaces/interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-flight',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './all-flight.component.html',
  styleUrl: './all-flight.component.css'
})
export class AllFlightComponent implements OnInit {

  constructor(private service:ServiceService) { }

  fightlist:any[]=[]

  ngOnInit(): void {
  this.loadFlights()
  }

  loadFlights(){
    this.service.getAllFlights().subscribe((res:APIResponseModal)=>{

      this.fightlist=res.data
      console.log("fightlist:"+JSON.stringify(this.fightlist))
      })
  }



}
