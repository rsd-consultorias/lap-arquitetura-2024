import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { CheckoutSummary } from '../models/checkout-summary';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutSummary?: CheckoutSummary;
  totalPrice?: number;
  totalAmount?: number;
  totalDiscount?: number;
  totalInsurance?: number;
  totalTax?: number;
  totalShipping?: number;
  totalShippingDiscount?: number;
  totalHandlingFee?: number;

  constructor(
    protected paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.checkoutSummary = this.paymentService.getCheckoutSummary();
    this.totalPrice = this.checkoutSummary.shoppingCart?.items.map(item => item.price).reduce((previous, current) => current + previous);
    this.totalDiscount = this.checkoutSummary.shoppingCart?.items.map(item => item.discount).reduce((previous, current) => current! + previous!);
    this.totalTax = this.checkoutSummary.shoppingCart?.items.map(item => item.tax).reduce((previous, current) => current! + previous!);
    this.totalShipping = this.checkoutSummary.shoppingCart?.items.map(item => item.shipping).reduce((previous, current) => current! + previous!);
    this.totalShippingDiscount = this.checkoutSummary.shoppingCart?.items.map(item => item.shippingDiscount).reduce((previous, current) => current! + previous!);
    this.totalHandlingFee = this.checkoutSummary.shoppingCart?.items.map(item => item.handlingFee).reduce((previous, current) => current! + previous!);
    
    this.totalAmount = this.totalPrice! - this.totalDiscount! + this.totalTax! + this.totalShipping! - this.totalShippingDiscount! + this.totalHandlingFee!;
  }

  createOrder() {
    this.paymentService.createOrder().subscribe({
      next: (response: any) => {
        this.checkoutSummary = this.paymentService.updateCheckoutSummary(response.body);
      }
    });
  }

  requestApproval() {
    window.location.href = this.checkoutSummary?.paymentInfo?.transactionResponseBody.links.filter((item: { rel: string; }) => item.rel === 'approval_url').map((item: { href: any; }) => item.href)[0];
  }
}
