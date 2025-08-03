import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { HomeComponent } from './home/home.component';
import { TicketHistoryComponent } from './components/ticket-history/ticket-history.component';

const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"booking", component: BookingComponent},
  {path:"cancel-booking", component: CancelBookingComponent},
  {path:"booking-history", component: TicketHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
