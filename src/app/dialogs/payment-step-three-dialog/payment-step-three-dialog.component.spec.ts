import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStepThreeDialogComponent } from './payment-step-three-dialog.component';

describe('PaymentStepThreeDialogComponent', () => {
  let component: PaymentStepThreeDialogComponent;
  let fixture: ComponentFixture<PaymentStepThreeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStepThreeDialogComponent]
    });
    fixture = TestBed.createComponent(PaymentStepThreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
