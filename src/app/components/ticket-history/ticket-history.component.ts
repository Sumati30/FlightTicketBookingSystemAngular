import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.component.html',
  styleUrls: ['./ticket-history.component.css']
})
export class TicketHistoryComponent implements OnInit {
  flights: any= [];
  selectedFlight:any;
  ticketHistory: any = []; // Array to hold ticket history

  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
    this.fetchAvailableFlights();
    //this.loadTicketHistory();
  }

  fetchAvailableFlights() {
    this.bookingService.fetchAvailableFlights().subscribe({
      next: (response) => {
        console.log('Ticket history loaded:', response);
        this.flights = response; // Assuming response is an array of flights
        // Process the response to display ticket history
      }
      , error: (error) => {
        console.error('Failed to load ticket history:', error);
      }
    });
  }

  loadTicketHistory() {
    // Logic to load ticket history
    console.log('Loading ticket history...');
    // This could involve calling a service to fetch the data

    this.bookingService.fetchFlightBookings(this.selectedFlight).subscribe({
      next: (response) => {
        console.log('Ticket history loaded:', response);
        this.ticketHistory = response; // Assuming response is an array of ticket history
      },
      error: (error) => {
        console.error('Failed to load ticket history:', error);
      }
    }); 
  }
}
