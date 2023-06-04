import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentStepOneDialogComponent } from '../dialogs/payment-step-one-dialog/payment-step-one-dialog.component';
import { PaymentStepTwoDialogComponent } from '../dialogs/payment-step-two-dialog/payment-step-two-dialog.component';
import { PaymentStepThreeDialogComponent } from '../dialogs/payment-step-three-dialog/payment-step-three-dialog.component';
import { SuccessfulTransactionDialogComponent } from '../dialogs/successful-transaction-dialog/successful-transaction-dialog.component';
import { FailedTransactionDialogComponent } from '../dialogs/failed-transaction-dialog/failed-transaction-dialog.component';
import { delay, of, tap } from 'rxjs';
import { AuthService } from './auth.service';

export enum PaymentOption {
  PAYPAL = 'PAYPAL',
  MASTERCARD = 'MASTERCARD',
  VISA = 'VISA',
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  openPaymentStepOneDialog(amount?: number) {
    this.dialog.open(PaymentStepOneDialogComponent, {
      height: '278px',
      width: '500px',
      disableClose: true,
      data: {
        amount,
      },
    });
  }
  openPaymentStepTwoDialog(amount: number, paymentOption?: PaymentOption) {
    this.dialog.open(PaymentStepTwoDialogComponent, {
      height: '272px',
      width: '500px',
      disableClose: true,
      data: {
        amount,
        paymentOption,
      },
    });
  }

  openPaymentStepThreeDialog(
    amount: number,
    paymentOption: PaymentOption,
    value?: any
  ) {
    this.dialog.open(PaymentStepThreeDialogComponent, {
      height: '492px',
      width: '500px',
      disableClose: true,
      data: {
        amount,
        paymentOption,
        value,
      },
    });
  }

  openSuccessfulTransactionDialog(amount) {
    this.dialog.open(SuccessfulTransactionDialogComponent, {
      height: '266px',
      width: '388px',
      disableClose: true,
      data: {
        amount,
      },
    });
  }

  opendFailedTransactionDialog(payload) {
    console.log('sss');
    console.log(payload);
    this.dialog.open(FailedTransactionDialogComponent, {
      height: '266px',
      width: '388px',
      disableClose: true,
      data: { ...payload },
    });
  }

  pay(paymentOption: PaymentOption, value) {
    return of(true).pipe(
      delay(1000),
      tap(() => this.authService.updateLoggedUserBalance(value.amount))
    );
  }
}
