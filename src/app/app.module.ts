import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TicketHistoryComponent } from './components/ticket-history/ticket-history.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CancelBookingComponent,
    HomeComponent,
    TicketHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Import FormsModule for template-driven forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
