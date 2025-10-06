import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layot',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layot.html',
  styleUrl: './layot.css',
})
export class Layot {
  router = inject(Router);
  onLogOff() {
    localStorage.removeItem('ticketUser');
    this.router.navigateByUrl('login');
  }
}
