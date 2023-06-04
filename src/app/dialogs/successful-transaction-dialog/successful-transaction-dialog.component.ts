import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-successful-transaction-dialog',
  templateUrl: './successful-transaction-dialog.component.html',
  styleUrls: ['./successful-transaction-dialog.component.scss'],
})
export class SuccessfulTransactionDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<SuccessfulTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { amount: number }
  ) {}

  onClose() {
    this.dialogRef.close();
  }
}
