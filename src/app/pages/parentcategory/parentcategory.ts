import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';
import { FormsModule, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parentcategory',
  imports: [FormsModule],
  templateUrl: './parentcategory.html',
  styleUrl: './parentcategory.css',
})
export class Parentcategory implements OnInit {
  masterService = inject(Master);
  gridData = signal<any[]>([]);
  DepData = signal<any[]>([]);
  newObj: any = {
    categoryId: 0,
    categoryName: '',
    deptId: '',
  };
  ngOnInit(): void {
    this.getGridData();
    this.getAllDepartments();
  }
  getAllDepartments() {
    this.masterService.getAllDepr().subscribe((res: any) => {
      this.DepData.set(res.data);
    });
  }
  getGridData() {
    this.masterService.getAllpCategoty().subscribe((res: any) => {
      this.gridData.set(res.data);
    });
  }
  save() {
    this.masterService.createNewCat(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert('Category Created Successefully');
        this.getGridData();
      } else {
        alert(res.message);
      }
    });
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    this.masterService.updateCat(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert('Category updated Successefully');
        this.newObj = {
          categoryId: 0,
          categoryName: '',
          deptId: 0,
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
      this.masterService.deleteCatById(id).subscribe((res: any) => {
        if (res.result) {
          alert('Category deleted Successefully');
          this.getGridData();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
