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

  cancelBooking(bookingId: string) {
    // Logic to cancel a booking
    console.log(`Cancelling booking with ID ${bookingId}`);

    return this.http.delete(`http://localhost:8080/flight/cancel/${bookingId}`, { responseType: 'text' });
  }

  fetchAvailableFlights(){
    // Logic to fetch available flights
    console.log('Fetching available flights');

    return this.http.get("http://localhost:8080/flight/available");
  }

  fetchFlightBookings(flightNumber: string) {
    // Logic to fetch flight bookings
    console.log(`Fetching bookings for flight ${flightNumber}`);

    return this.http.get(`http://localhost:8080/flight/booking-history/${flightNumber}`);
  }
}
