import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BASE_URL } from 'src/constants/constants';
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
} from 'src/utils/helpers';

interface FormData {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  isUserLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  signUp(formData: FormData) {
    return this.http
      .post(`${BASE_URL}/users/signup`, {
        userData: formData,
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  login(formData: FormData) {
    return this.http
      .post(`${BASE_URL}/users/login`, {
        userData: formData,
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  logout() {
    removeDataFromLocalStorage('user');
    this.isUserLoggedIn.next(false);
  }

  private errorHandler(err) {
    let errorMessage = 'Oops! Something went wrong, Please try again.';

    if (!err.error && !err.error.message) {
      return throwError(errorMessage);
    }
    return throwError(err.error.message);
  }

  checkIfUserIsLoggedIn() {
    const userData = getDataFromLocalStorage('user');
    this.isUserLoggedIn.next(!!userData);

    return !!userData;
  }
}
