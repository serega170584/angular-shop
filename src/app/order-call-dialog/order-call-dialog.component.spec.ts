import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCallDialogComponent } from './order-call-dialog.component';

describe('OrderCallDialogComponent', () => {
  let component: OrderCallDialogComponent;
  let fixture: ComponentFixture<OrderCallDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCallDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
