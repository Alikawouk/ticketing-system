import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee implements OnInit {
  masterService = inject(Master);
  router = inject(Router);
  gridData = signal<any[]>([]);
  deptList = signal<any[]>([]);
  roleList = signal<any[]>([]);
  isNewView: boolean = false;

  newObj: any = {
    employeeId: 0,
    employeeName: '',
    contactNo: '',
    emailId: '',
    deptId: 0,
    password: '',
    gender: '',
    role: '',
  };
  ngOnInit(): void {
    this.getGridData();
    this.getAllDepartments();
    this.getAllRoles();
  }
  getAllDepartments() {
    this.masterService.getAllDepr().subscribe((res: any) => {
      this.deptList.set(res.data);
    });
  }
  getAllRoles() {
    this.masterService.getAllRoles().subscribe((res: any) => {
      this.roleList.set(res.data);
    });
  }
  getGridData() {
    this.masterService.getAllEmps().subscribe((res: any) => {
      this.gridData.set(res.data);
    });
  }
  save() {
    this.masterService.createEmp(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert('Employee Created Successefully');
        this.getGridData();
        this.newObj = {
          employeeId: 0,
          employeeName: '',
          contactNo: '',
          emailId: '',
          deptId: 0,
          password: '',
          gender: '',
          role: '',
        };
        this.isNewView = !this.isNewView;
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    this.masterService.updateEmp(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert('Employee updated Successefully');
        this.newObj = {
          employeeId: 0,
          employeeName: '',
          contactNo: '',
          emailId: '',
          deptId: 0,
          password: '',
          gender: '',
          role: '',
        };
        this.getGridData();
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: number) {
    const isDelete = confirm('are you sure you want to delete?');
    if (isDelete) {
      this.masterService.deleteEmpById(id).subscribe((res: any) => {
        if (res.result) {
          alert('Employee deleted Successefully');
          this.getGridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
