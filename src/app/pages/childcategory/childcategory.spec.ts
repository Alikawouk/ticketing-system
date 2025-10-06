import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcategory } from './childcategory';

describe('Childcategory', () => {
  let component: Childcategory;
  let fixture: ComponentFixture<Childcategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childcategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childcategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
