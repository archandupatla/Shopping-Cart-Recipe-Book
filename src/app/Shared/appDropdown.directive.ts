import { Directive, HostListener, HostBinding } from '@angular/core';
@Directive({
selector: '[appDropdown]'
})
export class AppDropdown{
@HostBinding('class.open') isOpen: boolean = false;
@HostListener ('click') toggleClass(){
this.isOpen = !this.isOpen;
}
}