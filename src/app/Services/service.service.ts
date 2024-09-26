import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { APIResponseModal } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  //  apiUrl:string="https://freeapi.gerasim.in/api/FlightBooking/"
 

   getCities():Observable<APIResponseModal>{
    return  this.http.get<APIResponseModal>("/api/FlightBooking/GetAllCity")  
     
    }
    AddUpdateBulkCity(list:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("/api/FlightBooking/AddUpdateBulkCity",list) 
    //   return this.http.post<APIResponseModal>("/api/FlightBooking/AddUpdateBulkCity",list)
    // .pipe(
    //   catchError(this.handleError('addHero', list))
    // ); 
    }
    // private handleError<APIResponseModal>(operation = 'operation', result? : APIResponseModal) {
    //   return (error: any): Observable<any> => {
    
        
    
    //     // result: my result....
    //     return of(result);
    //   };
    // }

    getAirport():Observable<APIResponseModal>{
      return  this.http.get<APIResponseModal>("/api/FlightBooking/GetAllAirport")  
       
      }
      addUpdateBulkAirports(airportList:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("/api/FlightBooking/AddUpdateBulkAirports",airportList) 
    
     
    }
    getAllFlights():Observable<APIResponseModal>{
      return  this.http.get<APIResponseModal>("/api/FlightBooking/GetAllFlights")  
    }
    login(obj:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("api/FlightBooking/Login",obj) 
    }

    addUpdateBulkFlights(flight:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("/api/FlightBooking/AddUpdateBulkFlights",flight) 
    
     
    }
    deleteAirportById(id:number):Observable<APIResponseModal>{
      return  this.http.delete<APIResponseModal>("/api/FlightBooking/DeleteAirportById?airportId="+id) 
    }

    getSearchFlights(departureAirportId:number,arrivalAirportId:number,dateOfTravel:string):Observable<APIResponseModal>{
      return  this.http.get<APIResponseModal>("api/FlightBooking/SearchFlight?departureAirportId="+departureAirportId+"&arrivalAirportId="+arrivalAirportId+"&dateOfTravel="+dateOfTravel)  
    }
    userRegister(user:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("/api/FlightBooking/Register",user) 
    
     
    }
    userLogin(user:any):Observable<APIResponseModal>{
      return  this.http.post<APIResponseModal>("/api/FlightBooking/Login",user) 
    
     
    }
    
}
