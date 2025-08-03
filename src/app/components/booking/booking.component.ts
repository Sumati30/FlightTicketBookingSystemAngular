import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  seatRows: string[][] = [];
  selectedSeats: string[] = [];

  constructor( private bookingService: BookingService) {
    const seatLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let seatCount = 0;
    for (let row = 1; row <= 17; row++) {
      const rowSeats: string[] = [];
      for (let letter of seatLetters) {
        if (seatCount >= 100) break;
        rowSeats.push(`${row}${letter}`);
        seatCount++;
      }
      this.seatRows.push(rowSeats);
      if (seatCount >= 100) break;
    }
  }

  toggleSeat(seat: string) {
    const idx = this.selectedSeats.indexOf(seat);
    if (idx > -1) {
      this.selectedSeats.splice(idx, 1);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  isSelected(seat: string): boolean {
    return this.selectedSeats.includes(seat);
  }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit(form: any) {
    console.log(form.value);  // { name: '...', email: '...' }
    this.submitted = true;

    this.bookingService.bookTicket(
       form.value['passenger-name'],
      form.value['flight-number'],
      this.selectedSeats
    ).subscribe({
      next: (response) => {
        console.log('Booking successful:', response);
        this.selectedSeats = [];  // Clear selected seats after booking
        form.resetForm();  // Reset the form after successful booking
      },
      error: (error) => {
        console.error('Booking failed:', error);  
      }
})
  }
}