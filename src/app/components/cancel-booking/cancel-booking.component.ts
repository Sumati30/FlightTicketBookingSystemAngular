import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent implements OnInit {

  constructor(private bookingService:BookingService) { }

  ngOnInit(): void {
  }


  onCancel(form){
    console.log(form.value);  // { bookingId: '...' }    

    this.bookingService.cancelBooking(form.value['ticket-id']).subscribe({
      next: (response) => {
        console.log('Cancellation successful:', response);
        form.resetForm(); 
      },
      error: (error) => {
        console.error('Cancellation failed:', error);
      }
    });      
  }
}
