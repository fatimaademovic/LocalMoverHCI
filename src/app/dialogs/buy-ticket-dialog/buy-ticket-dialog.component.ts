import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-ticket-dialog',
  templateUrl: './buy-ticket-dialog.component.html',
  styleUrls: ['./buy-ticket-dialog.component.scss']
})
export class BuyTicketDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<BuyTicketDialogComponent>,
  ) {}

  onSubmit() {
    this.dialogRef.close();
  }
}
