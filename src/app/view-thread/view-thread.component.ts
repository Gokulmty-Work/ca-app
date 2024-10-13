import { Component } from '@angular/core';
import { SharedModule } from '../theme/shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-thread',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './view-thread.component.html',
  styleUrl: './view-thread.component.scss'
})
export class ViewThreadComponent {
    // Initial data
  userQuestion: string = 'What is the best way to learn Angular?';
  adminReply: string = 'You can start by following official documentation and building small projects.';
  followupQuestion: string = '';
  editQuestion: boolean = false; // Track edit state for user question
  editAdminReply: boolean = false; // Track edit state for admin reply
  followupQuestions: string[] = []; // Store follow-up questions
  isAdmin: boolean = false; // Assuming the current user is an admin for this example
  adminHasReplied: boolean = true; // Assuming the admin has replied
  isThreadClosed: boolean = false; // Thread is open initially
  
  // File management
  attachedFiles: string[] = ['angular_guide.pdf']; // Files attached to the user question
  adminAttachedFiles: string[] = ['admin_reply_attachment.txt']; // Files attached to the admin reply

  // File input handler for user question
  handleFileInput(event: any) {
    for (let file of event.target.files) {
      this.attachedFiles.push(file.name);
    }
  }

  // File input handler for admin reply
  handleAdminFileInput(event: any) {
    for (let file of event.target.files) {
      this.adminAttachedFiles.push(file.name);
    }
  }

  // Remove files
  removeFile(file: string) {
    this.attachedFiles = this.attachedFiles.filter(f => f !== file);
  }

  removeAdminFile(file: string) {
    this.adminAttachedFiles = this.adminAttachedFiles.filter(f => f !== file);
  }

  // Save the edited question
  saveQuestion() {
    this.editQuestion = false;
  }

  // Save the edited admin reply
  saveAdminReply() {
    this.editAdminReply = false;
  }

  // Post follow-up question
  postFollowup() {
    if (this.followupQuestion.trim()) {
      this.followupQuestions.push(this.followupQuestion);
      this.followupQuestion = ''; // Reset the input after posting
      alert('Follow-up question posted');
    }
  }

  // Post admin reply
  postAdminReply() {
    if (this.followupQuestion.trim()) {
      this.followupQuestions.push(this.followupQuestion);
      this.followupQuestion = ''; // Reset the input after posting
      alert('Admin reply posted');
    }
  }

  // Remove follow-up question
  removeFollowupQuestion(question: string) {
    this.followupQuestions = this.followupQuestions.filter(q => q !== question);
  }

  // Close the thread
  closeThread() {
    this.isThreadClosed = true;
    alert('The thread has been closed.');
  }
 }
