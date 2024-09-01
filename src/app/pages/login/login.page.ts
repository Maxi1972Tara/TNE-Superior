import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  passwordType: string = 'password';

  constructor(private router: Router) { }

  ngOnInit() {}

  onLogin() {
    if (this.email && this.password) {
      console.log('Inicio de sesión exitoso', this.email, this.password);
    } else {
      console.log('Correo electrónico y contraseña son obligatorios');
    }
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onRecoverPassword() {
    this.router.navigate(['/recover-password']);
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}



