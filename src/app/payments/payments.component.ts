import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedModule } from '../theme/shared/shared.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  paymentForm: FormGroup;
  paymentMethod: string = 'card';  // Default payment method is 'card'

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize the form with default fields for card payment
    this.paymentForm = this.formBuilder.group({
      paymentMethod: ['card'],  // Default selection
      cardNumber: ['', Validators.pattern('^\\d{4}-\\d{4}-\\d{4}-\\d{4}$')],  // Card number must match the format
      nameOnCard: ['', Validators.required],
      cvv: ['', Validators.pattern('^[0-9]{3}$')],  // CVV must be 3 digits
      upiId: ['', Validators.pattern('^[a-zA-Z0-9.-_]+@[a-zA-Z]+$')]  // Pattern for UPI ID
    });
  }

  // Format card number input as 4-4-4-4
  formatCardNumber(event: any) {
    let input = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    let formatted = '';

    for (let i = 0; i < input.length; i += 4) {
      if (i + 4 < input.length) {
        formatted += input.substr(i, 4) + '-';
      } else {
        formatted += input.substr(i);
      }
    }

    event.target.value = formatted;
    this.paymentForm.get('cardNumber')?.setValue(formatted);
  }

  // Enable/disable form controls based on selected payment method
  onPaymentMethodChange(method: string) {
    this.paymentMethod = method;
    if (method === 'card') {
      this.paymentForm.get('cardNumber')?.setValidators([Validators.required, Validators.pattern('^\\d{4}-\\d{4}-\\d{4}-\\d{4}$')]);
      this.paymentForm.get('nameOnCard')?.setValidators([Validators.required]);
      this.paymentForm.get('cvv')?.setValidators([Validators.required, Validators.pattern('^[0-9]{3}$')]);

      this.paymentForm.get('upiId')?.clearValidators();
    } else if (method === 'upi') {
      this.paymentForm.get('upiId')?.setValidators([Validators.required, Validators.pattern('^[a-zA-Z0-9.-_]+@[a-zA-Z]+$')]);

      this.paymentForm.get('cardNumber')?.clearValidators();
      this.paymentForm.get('nameOnCard')?.clearValidators();
      this.paymentForm.get('cvv')?.clearValidators();
    }
    this.paymentForm.get('cardNumber')?.updateValueAndValidity();
    this.paymentForm.get('nameOnCard')?.updateValueAndValidity();
    this.paymentForm.get('cvv')?.updateValueAndValidity();
    this.paymentForm.get('upiId')?.updateValueAndValidity();
  }

  // Handle payment submission
  submitPayment() {
    if (this.paymentForm.valid) {
      console.log('Payment details:', this.paymentForm.value);
      this.router.navigate(['/payment-result']);
      // Implement payment logic here
    } else {
      console.log('Invalid payment details');
    }
  }
}
