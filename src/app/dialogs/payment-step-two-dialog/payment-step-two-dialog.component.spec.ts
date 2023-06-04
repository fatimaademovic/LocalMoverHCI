import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStepTwoDialogComponent } from './payment-step-two-dialog.component';

describe('PaymentStepTwoDialogComponent', () => {
  let component: PaymentStepTwoDialogComponent;
  let fixture: ComponentFixture<PaymentStepTwoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStepTwoDialogComponent]
    });
    fixture = TestBed.createComponent(PaymentStepTwoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
