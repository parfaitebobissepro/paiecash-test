import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.signIn(form.value);
    }
  }
}
