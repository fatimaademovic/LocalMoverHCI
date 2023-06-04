import { Component, Input, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.scss'],
})
export class TokensComponent implements OnInit {
  @Input() user: any;

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {}

  openTopUpDialog() {
    this.paymentService.openPaymentStepOneDialog();
  }
}
