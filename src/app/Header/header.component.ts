import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  @Output() handleLinkClick = new EventEmitter<string>();

  onLinkClick(linkName: string) {
    this.handleLinkClick.emit(linkName);
  }
}
