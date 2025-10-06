import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newticket',
  imports: [FormsModule],
  templateUrl: './newticket.html',
  styleUrl: './newticket.css',
})
export class Newticket implements OnInit {
  newTicketObj: any = {
    employeeId: 0,
    severity: '',
    childCategoryId: 0,
    deptId: 0,
    requestDetails: '',
  };
  masterService = inject(Master);
  deptList = signal<any[]>([]);
  pCategoryList = signal<any[]>([]);
  cCategoryList = signal<any[]>([]);
  filterCategory = signal<any[]>([]);
  selectedPcategory: string = '';
  ngOnInit(): void {
    const loggedUserData = localStorage.getItem('ticketUser');
    if (loggedUserData != null) {
      const userData = JSON.parse(loggedUserData);
      this.newTicketObj.employeeId = userData.employeeId;
    }
    this.getCCategory();
    this.getDept();
    this.getPCategory();
  }

  getDept() {
    this.masterService.getAllDepr().subscribe((res: any) => {
      this.deptList.set(res.data);
    });
  }
  getPCategory() {
    this.masterService.getAllpCategoty().subscribe((res: any) => {
      this.pCategoryList.set(res.data);
    });
  }
  getCCategory() {
    this.masterService.getChildCat().subscribe((res: any) => {
      this.cCategoryList.set(res.data);
    });
  }
  oncategoryCange() {
    this.filterCategory.set(
      this.cCategoryList().filter((x) => x.parentCategoryName === this.selectedPcategory)
    );
  }
  onCreateTicket() {
    this.masterService.newTicket(this.newTicketObj).subscribe((res: any) => {
      if (res.result) {
        alert('Category Created Successefully');
        this.getCCategory();
        this.getDept();
        this.getPCategory();
        this.newTicketObj = {
          employeeId: 0,
          severity: '',
          childCategoryId: 0,
          deptId: 0,
          requestDetails: '',
        };
      } else {
        alert(res.message);
      }
    });
  }
}
