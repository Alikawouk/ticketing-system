import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  tickets = [
    { id: 1, title: 'Network Issue', department: 'IT', status: 'Open', date: '2025-10-06' },
    {
      id: 2,
      title: 'Printer not working',
      department: 'Admin',
      status: 'Assigned',
      date: '2025-10-05',
    },
    { id: 3, title: 'Software update', department: 'IT', status: 'Resolved', date: '2025-10-03' },
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'Open':
        return 'primary';
      case 'Assigned':
        return 'warning';
      case 'Resolved':
        return 'success';
      default:
        return 'secondary';
    }
  }
}
