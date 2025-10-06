import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  imports: [DatePipe, FormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {
  masterService = inject(Master);
  departmentList = signal<any[]>([]);
  newDeptObj: any = {
    deptId: 0,
    deptName: '',
    createdDate: '',
  };
  ngOnInit(): void {
    this.getDept();
  }
  getDept() {
    this.masterService.getAllDepr().subscribe((res: any) => {
      this.departmentList.set(res.data);
    });
  }
  saveDept() {
    this.masterService.createNewDep(this.newDeptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Dept Created Successefully');
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newDeptObj = data;
  }
  updatDept() {
    this.masterService.updateDep(this.newDeptObj).subscribe((res: any) => {
      if (res.result) {
        alert('Dept updated Successefully');
        this.newDeptObj = {
          deptId: 0,
          deptName: '',
          createdDate: '',
        };
        this.getDept();
      } else {
        alert(res.message);
      }
    });
  }
  onDelete(id: number) {
    const isDelete = confirm('are you sure you want to delete?');
    if (isDelete) {
      this.masterService.deleteDepById(id).subscribe((res: any) => {
        if (res.result) {
          alert('Dept deleted Successefully');
          this.getDept();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
