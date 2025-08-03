import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  bookTicket( passengerName: string,flightNumber: string, seatNumber: string[]){
    // Logic to book a ticket
    console.log(`Booking ticket for ${passengerName} on flight ${flightNumber} with seat ${seatNumber}`);
    let params = {
      username: passengerName,
      flightNumber: flightNumber,
      seatNumber: seatNumber  
    }
    return this.http.post("http://localhost:8080/flight/reserve", params, { responseType: 'text' });
  }
}
