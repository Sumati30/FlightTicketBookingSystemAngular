import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CancelBookingComponent
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
