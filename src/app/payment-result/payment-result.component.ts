import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../theme/shared/shared.module';
import { CommonModule } from '@angular/common';

import { IconService } from '@ant-design/icons-angular';
import { PlusOutline } from '@ant-design/icons-angular/icons';
@Component({
  selector: 'app-payment-result',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './payment-result.component.html',
  styleUrl: './payment-result.component.scss'
})
export class PaymentResultComponent {
  paymentStatus: 'success' | 'failure' = 'failure'; // Change based on the result
  countdown: number = 5; // Set countdown timer

  constructor(private router: Router) {}

  ngOnInit() {
    // Start countdown timer
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.redirectToNextPage();
      }
    }, 1000);
  }

  // Redirect based on payment status
  redirectToNextPage() {
    if (this.paymentStatus === 'success') {
      this.router.navigate(['/home/thread-history']); // Redirect to home page
    } else {
      this.router.navigate(['/checkout']); // Redirect to checkout page
    }
  }
}
