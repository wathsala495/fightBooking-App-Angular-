import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { BookflightComponent } from './pages/website/bookflight/bookflight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { AllFlightComponent } from './pages/admin/all-flight/all-flight.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { WebsiteLandingComponent } from './pages/website/website-landing/website-landing.component';

export const routes: Routes = [

    {
       path:'',
       redirectTo:'search' ,
       pathMatch:'full'
    },
    {
       path:'',
       component:WebsiteLandingComponent,
       children:[
        {
            path:'search',
            component:SearchComponent,
            title:'Search Flights'
        },
        {
            path:'book-flight',
            component:BookflightComponent,
            title:'Book New Flight'
        },
        {
            path:'Bookings',
            component:MyBookingsComponent,
            title:'My Bookings'
        },
        {
            path:'login',
            component:LoginComponent
        },
       ]
    },
    
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'airport',
                component:AirportComponent
            },
          
            {
                path:'city',
                component:CityComponent
            },
            {
               path:'all-bookings',
               component:BookingsComponent
            },
            {
                path:'new-flight',
                component:NewFlightComponent
            },
            {
                path:'all-flights',
                component:AllFlightComponent
            }
        ]
    }
];
