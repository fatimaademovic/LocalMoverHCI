import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStepOneDialogComponent } from './payment-step-one-dialog.component';

describe('PaymentStepOneDialogComponent', () => {
  let component: PaymentStepOneDialogComponent;
  let fixture: ComponentFixture<PaymentStepOneDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStepOneDialogComponent]
    });
    fixture = TestBed.createComponent(PaymentStepOneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
