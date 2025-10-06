import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  masterService = inject(Master);
  router = inject(Router);
  loginObj: any = {
    emailId: 'admin@gmail.com',
    password: 'admin',
  };
  onLogin() {
    this.masterService.login(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        //navigate to dashboard
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    });
  }
}
