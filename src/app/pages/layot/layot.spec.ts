import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layot } from './layot';

describe('Layot', () => {
  let component: Layot;
  let fixture: ComponentFixture<Layot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
