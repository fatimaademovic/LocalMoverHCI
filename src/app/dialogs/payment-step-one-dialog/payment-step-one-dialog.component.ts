import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-step-one-dialog',
  templateUrl: './payment-step-one-dialog.component.html',
  styleUrls: ['./payment-step-one-dialog.component.scss'],
})
export class PaymentStepOneDialogComponent {
  form: FormGroup;

  get amount() {
    return this.form.get('amount') as any;
  }

  constructor(
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PaymentStepOneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { amount?: number }
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      amount: [
        this.data?.amount || 0,
        [Validators.required, Validators.min(0.01)],
      ],
    });
  }

  openNextPaymentStep(amount) {
    this.dialogRef.close();
    this.paymentService.openPaymentStepTwoDialog(amount);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.validateAllFormFields(this.form);
      return;
    }
    this.openNextPaymentStep(this.form.value.amount);
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
