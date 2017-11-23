import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open;

  @HostListener('click') onToggle() {
    this.open = !this.open;
  }

  constructor() { }

}
