import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  credentials = {
    email: '',
    password: '',
    remember: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.isFormValid()) {
      // Simulate login (in real app, you'd call an API)
      alert(`Welcome back!\n\nEmail: ${this.credentials.email}\n${this.credentials.remember ? 'You will be remembered' : ''}`);
      this.router.navigate(['/browse']);
    } else {
      alert('Please fill in all required fields!');
    }
  }

  onGoogleLogin() {
    alert('Google Sign-In would be implemented here!\nRedirecting to browse page...');
    this.router.navigate(['/browse']);
  }

  isFormValid(): boolean {
    return !!(this.credentials.email && this.credentials.password);
  }
}
