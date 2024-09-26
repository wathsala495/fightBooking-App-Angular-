export interface APIResponseModal{
  message: string,
  result: boolean,
  data:any
}

export interface Icity{
    userId: number,
    name: string,
    email: string,
    password: string,
    contactNo: string,
    role: string
}
export class city{
  cityId: number;
  cityName: string;

  constructor(cityId: number, cityName: string){
    this.cityId = cityId;
    this.cityName = cityName;
  }
}
export class flight{
flightId: number;
flightNumber: string;
departureAirportId: number;
departureTime: string;
arrivalAirportId: number;
arrivalTime: string;
price: number;
totalSeats: number;
flightVendorId: number;
travelDate: string;

constructor(flightId: number, flightNumber: string, departureAirportId: number, departureTime: string, arrivalAirportId: number, arrivalTime: string, price: number, totalSeats: number, flightVendorId: number, travelDate: string){
        this.flightId = flightId;
        this.flightNumber = flightNumber;
        this.departureAirportId = departureAirportId;
        this.departureTime = departureTime;
        this.arrivalAirportId = arrivalAirportId;
        this.arrivalTime = arrivalTime;
        this.price = price;
        this.totalSeats = totalSeats;
        this.flightVendorId = flightVendorId;
        this.travelDate = travelDate;
}
}

export class User{
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  address: string;
  password: string;

  constructor(name: string, mobileNo: string, email: string, city: string, address: string, password: string){
    this.name = name;
    this.mobileNo = mobileNo;
    this.email = email;
    this.city = city;
    this.address = address;
    this.password = password;
  }
}
export class loginuser{
  email: string;
  password: string;

  constructor(email: string, password: string){
    this.email = email;
    this.password = password;
  }
}

