import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PaymentOption, PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-failed-transaction-dialog',
  templateUrl: './failed-transaction-dialog.component.html',
  styleUrls: ['./failed-transaction-dialog.component.scss'],
})
export class FailedTransactionDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<FailedTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { amount: number; paymentOption: PaymentOption; value?: any },
    private paymentService: PaymentService
  ) {}

  onSubmit() {
    this.dialogRef.close();
    const { amount, paymentOption, ...value } = this.data;
    this.paymentService.openPaymentStepThreeDialog(
      amount,
      paymentOption,
      value
    );
  }
}
