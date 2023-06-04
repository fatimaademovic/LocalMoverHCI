import { Component, Inject, OnInit } from '@angular/core';
import { PaymentOption, PaymentService } from '../../services/payment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-step-two-dialog',
  templateUrl: './payment-step-two-dialog.component.html',
  styleUrls: ['./payment-step-two-dialog.component.scss'],
})
export class PaymentStepTwoDialogComponent implements OnInit {
  PaymentOption = PaymentOption;
  paymentOption;

  constructor(
    private paymentService: PaymentService,
    private dialogRef: MatDialogRef<PaymentStepTwoDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { amount: number; paymentOption?: PaymentOption }
  ) {}

  ngOnInit(): void {
    this.paymentOption = this.data?.paymentOption || PaymentOption.PAYPAL;
  }

  onSubmit() {
    this.dialogRef.close();
    this.paymentService.openPaymentStepThreeDialog(
      this.data.amount,
      this.paymentOption
    );
  }

  onBack() {
    this.dialogRef.close();
    this.paymentService.openPaymentStepOneDialog(this.data.amount);
  }

  setOption(option) {
    this.paymentOption = option;
  }
}
