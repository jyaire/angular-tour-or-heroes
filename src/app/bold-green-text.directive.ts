import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoldGreenText]'
})
export class BoldGreenTextDirective implements OnInit {
  
  @HostBinding('style.color') myColor:string;
  @HostBinding('style.font-weight') fontWeight:string;
  @HostBinding('style.font-size') fontSize:string;

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseEnterEvent(EvenDate:Event) {
    this.myColor = 'green';
    this.fontWeight = 'bold';
    this.fontSize = '1.5rem';
  }

  @HostListener('mouseleave') mouseLeaveEvent(EvenDate:Event) {
    this.myColor = 'black';
    this.fontWeight = 'normal';
    this.fontSize = '1rem';
  }

}
