import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;
    private mouseInAgain: boolean = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        this.mouseInAgain = true;
    }

    @HostListener('mouseenter') onmouseenter() {
        if(this.isOpen) {
            this.mouseInAgain = true;
        }
    }

    @HostListener('mouseleave') onmouseleave() {
        setTimeout(() => {
            if(!this.mouseInAgain) {
                this.isOpen = false;
            }
        }, 500);
        this.mouseInAgain = false;
    }
}