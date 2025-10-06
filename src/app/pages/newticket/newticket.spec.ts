import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newticket } from './newticket';

describe('Newticket', () => {
  let component: Newticket;
  let fixture: ComponentFixture<Newticket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newticket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newticket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
