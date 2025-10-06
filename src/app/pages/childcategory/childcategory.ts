import { Component, inject, OnInit, signal } from '@angular/core';
import { Master } from '../../services/master';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcategory',
  imports: [FormsModule],
  templateUrl: './childcategory.html',
  styleUrl: './childcategory.css',
})
export class Childcategory implements OnInit {
  masterService = inject(Master);
  gridData = signal<any[]>([]);
  parentCatList = signal<any[]>([]);

  newObj: any = {
    childCategoryId: 0,
    categoryName: '',
    parentCategoryId: 0,
  };
  ngOnInit(): void {
    this.getGridData();
    this.getPcategory();
  }
  getPcategory() {
    this.masterService.getAllpCategoty().subscribe((res: any) => {
      this.parentCatList.set(res.data);
    });
  }
  getGridData() {
    this.masterService.getChildCat().subscribe((res: any) => {
      this.gridData.set(res.data);
    });
  }
  save() {
    this.masterService.createChildCat(this.newObj).subscribe((res: any) => {
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
    this.masterService.updateChildCat(this.newObj).subscribe((res: any) => {
      if (res.result) {
        alert('Category updated Successefully');
        this.newObj = {
          childCategoryId: 0,
          categoryName: '',
          parentCategoryId: 0,
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
      this.masterService.deleteChildCatById(id).subscribe((res: any) => {
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
