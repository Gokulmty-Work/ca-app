import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedModule } from '../theme/shared/shared.module';


@Component({
  selector: 'app-new-thread',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './new-thread.component.html',
  styleUrl: './new-thread.component.scss'
})
export class NewThreadComponent implements OnInit{


  threadForm: FormGroup;
  attachedFiles: File[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Initialize form with form controls
    this.threadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      files: [null]
    });
  }

  ngOnInit(): void {
  }

  // Handles file input change event
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.attachedFiles = Array.from(event.target.files);
      this.threadForm.patchValue({
        files: this.attachedFiles
      });
    }
  }

  // Submit the form data
  submitThread() {
    if (this.threadForm.valid) {
      const formData = new FormData();
      formData.append('title', this.threadForm.get('title')?.value);
      formData.append('description', this.threadForm.get('description')?.value);
      
      // Append attached files
      this.attachedFiles.forEach(file => {
        formData.append('files', file);
      });

      // Normally, you'd send `formData` to the server here
      console.log('Thread Form Submitted', formData);

      // Reset the form after submission
      this.threadForm.reset();
      this.attachedFiles = [];
    } else {
      console.log('Form is not valid');
    }
  }

  proceedToCheckout(){
    this.router.navigate(['checkout']);
  }
}
