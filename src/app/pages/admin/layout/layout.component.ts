import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggeddata:any

  constructor( private router:Router){
    const localData=localStorage.getItem('flightUser');
    if(localData!=null){
      this.loggeddata=JSON.parse(localData)
    }
  }
  logof(){
    localStorage.removeItem('flightUser')
     this.router.navigate(['/login'])
  }

}
