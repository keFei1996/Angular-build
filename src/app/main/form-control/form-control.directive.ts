import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFormControl]',

})
export class FormControlDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.light);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @Input('appFormControl') light: string;

  constructor(
   private el: ElementRef
  ) {}

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}
