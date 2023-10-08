import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLoggedIn = false;
  userSubscription = new Subscription();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isUserLoggedIn = this.authService.checkIfUserIsLoggedIn();
    this.userSubscription = this.authService.isUserLoggedIn.subscribe((obs) => {
      this.isUserLoggedIn = obs;
    });
  }

  onLogout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
