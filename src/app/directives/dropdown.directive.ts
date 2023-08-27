import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleClick(event: Event) {
    const isDropdownClicked = this.elementRef.nativeElement.contains(
      event.target
    );

    this.isOpen = isDropdownClicked ? !this.isOpen : false;
  }

  // ^INFO - By below one the dropdown will not get closed when you click outside the DOM
  //   @HostListener('click') toggleOpen() {
  //     this.isOpen = !this.isOpen;
  //   }

  // ^INFO - This is another approach to toggle the dropdown, above one is better and concise one.
  //   @HostListener('click', ['$event']) onClick() {
  //     const isDropdownOpen =
  //       this.elementRef.nativeElement.classList.contains('open');
  //     if (isDropdownOpen) {
  //       this.renderer.removeClass(this.elementRef.nativeElement, 'open');
  //     } else {
  //       this.renderer.addClass(this.elementRef.nativeElement, 'open');
  //     }
  //   }
}
