import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';

@Component({
  selector: 'app-ticket-list',
  imports: [],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css',
})
export class TicketList implements OnInit {
  mode: string = 'My Tickets';
  ticketsList = signal<any[]>([]);
  masterService = inject(Master);
  loggedUserEmpId: any;
  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser');
    if (loggedUserData != null) {
      const userData = JSON.parse(loggedUserData);
      this.loggedUserEmpId = userData.employeeId;
    }
    this, this.changeMode(this.mode);
  }
  changeMode(str: string) {
    this.mode = str;
    if (this.mode == 'My Tickets') {
      this.masterService
        .getTicketsCreatedByLoggedEmp(this.loggedUserEmpId)
        .subscribe((res: any) => {
          this.ticketsList.set(res.data);
        });
    } else {
      this.masterService.getTicketsAssignedToEmpId(this.loggedUserEmpId).subscribe((res: any) => {
        this.ticketsList.set(res.data);
      });
    }
  }
  changeStatus(state: string, ticketid: number) {
    if (state == 'start') {
      this.masterService.startTicket(ticketid).subscribe((res: any) => {
        if (res.result) {
          alert('Ticket status changed');
          this.changeMode(this.mode);
        } else {
          alert(res.message);
        }
      });
    } else {
      this.masterService.closeTicket(ticketid).subscribe((res: any) => {
        if (res.result) {
          alert('Ticket closed Success');
          this.changeMode(this.mode);
        } else {
          alert(res.message);
        }
      });
    }
  }
}
