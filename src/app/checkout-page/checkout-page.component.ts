import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SharedModule } from '../theme/shared/shared.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit {

  paymentForm: FormGroup;
  totalAmount: number = 100;  // Default amount for "Single Time"

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize form with a default selected option ("Single Time")
    this.paymentForm = this.formBuilder.group({
      subscriptionType: ['single']  // Default to 'single' (Single Time $10)
    });

    // Watch for subscription changes and update the total amount accordingly
    this.paymentForm.get('subscriptionType')?.valueChanges.subscribe(value => {
      this.updateAmount(value);
    });
  }

  ngOnInit(): void {
    
  }

  // Update total amount based on selected subscription type
  updateAmount(subscriptionType: string) {
    switch (subscriptionType) {
      case 'single':
        this.totalAmount = 100;
        break;
      case 'weekly':
        this.totalAmount = 250;
        break;
      case 'monthly':
        this.totalAmount = 500;
        break;
      default:
        this.totalAmount = 100;
    }
  }

  // Handle payment submission
  proceedToPayment() {
    const selectedSubscription = this.paymentForm.get('subscriptionType')?.value;
    console.log('Proceeding with payment for', selectedSubscription, 'with amount', this.totalAmount);
    this.router.navigate(['payment']);
    // Implement your payment logic here
  }

}
