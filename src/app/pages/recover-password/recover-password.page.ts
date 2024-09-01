import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {
  email: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    if (this.email) {
      console.log('Enviar enlace de recuperación a', this.email);
    } else {
      console.log('Correo electrónico es obligatorio');
    }
  }

  onBack() {
    this.router.navigate(['/login']);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
