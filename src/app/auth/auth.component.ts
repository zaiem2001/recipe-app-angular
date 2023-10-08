import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/services/auth.service';
import { saveToLocalStorage } from 'src/utils/helpers';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;
  error = null;

  constructor(private auhtService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auhtService.checkIfUserIsLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  switchModes() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(formData: NgForm) {
    if (!formData.valid) return;
    const { email, password } = formData.value;

    this.isLoading = true;
    this.error = null;
    if (this.isLoginMode) {
      this.login({ email, password }, formData);
    } else {
      this.signUp({ email, password }, formData);
    }
  }

  signUp({ email, password }, form: NgForm) {
    this.auhtService.signUp({ email, password }).subscribe(
      (response) => {
        this.isLoginMode = true;
        this.isLoading = false;

        form.reset();
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }

  login({ email, password }, form: NgForm) {
    this.auhtService.login({ email, password }).subscribe(
      (response) => {
        this.isLoading = false;
        saveToLocalStorage({ key: 'user', value: response.user });
        this.auhtService.isUserLoggedIn.next(true);

        this.router.navigate(['/']);
      },
      (err) => {
        this.error = err;
        this.isLoading = false;
      }
    );
  }
}
