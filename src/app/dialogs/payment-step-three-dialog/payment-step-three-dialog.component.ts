import { Component, Inject, OnInit } from '@angular/core';
import { PaymentOption, PaymentService } from '../../services/payment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { catchError, filter, of, tap } from 'rxjs';

@Component({
  selector: 'app-payment-step-three-dialog',
  templateUrl: './payment-step-three-dialog.component.html',
  styleUrls: ['./payment-step-three-dialog.component.scss'],
})
export class PaymentStepThreeDialogComponent implements OnInit {
  PaymentOption = PaymentOption;

  paypalForm: FormGroup;
  standardForm: FormGroup;

  get email() {
    return this.paypalForm.get('email') as any;
  }

  get cardNumber() {
    return this.standardForm.get('cardNumber') as any;
  }

  get expirationDate() {
    return this.standardForm.get('expirationDate') as any;
  }

  get cvv() {
    return this.standardForm.get('cvv') as any;
  }

  get form() {
    return this.data.paymentOption === PaymentOption.PAYPAL
      ? this.paypalForm
      : this.standardForm;
  }

  constructor(
    private paymentService: PaymentService,
    private dialogRef: MatDialogRef<PaymentStepThreeDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { amount: number; paymentOption: PaymentOption; value: any },
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paypalForm = this.formBuilder.group({
      email: [this.data?.value?.email || '', [Validators.required]],
    });
    this.standardForm = this.formBuilder.group({
      cardNumber: [this.data?.value?.cardNumber || '', [Validators.required]],
      expirationDate: [
        this.data?.value?.expirationDate || '',
        [Validators.required, Validators.min(Date.now())],
      ],
      cvv: [
        this.data?.value?.cvv || '',
        [
          Validators.required,
          Validators.min(100),
          Validators.max(999),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.validateAllFormFields(this.form);
      return;
    }

    const payload = {
      ...this.form.value,
      amount: this.data.amount,
    };
    console.log(payload);
    this.paymentService
      .pay(this.data.paymentOption, payload)
      .pipe(
        tap(() => {
          this.dialogRef.close();
        }),
        catchError(() => {
          this.paymentService.opendFailedTransactionDialog({
            ...payload,
            paymentOption: this.data.paymentOption,
          });
          return of(false);
        }),
        filter((result) => result)
      )
      .subscribe(() => {
        this.paymentService.openSuccessfulTransactionDialog(payload.amount);
      });
  }

  onBack() {
    this.dialogRef.close();
    this.paymentService.openPaymentStepTwoDialog(
      this.data.amount,
      this.data.paymentOption
    );
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.markAsDirty();
      } else {
        this.validateAllFormFields(control as FormGroup);
      }
    });
  }
}
