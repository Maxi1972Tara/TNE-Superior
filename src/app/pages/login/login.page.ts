import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) { }
  email: string = '';
  password: string = '';
  passwordType: string = 'password';
  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  onLogin() {
    console.log('Login button clicked');
  }
  onRegister() {
    this.router.navigate(['/create-email']);
  }
  onRecoverPassword() {
    this.router.navigate(['/recover-password']);
  }
}
