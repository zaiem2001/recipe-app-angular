import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeLink = '';

  constructor() {
    this.activeLink = 'recipes';
  }

  onLinkClick = (eventData: string) => {
    this.activeLink = eventData;
  };
}
