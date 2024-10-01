import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(private balise:ElementRef, private render:Renderer2) {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor' , 'bleu');
   }
  
   @HostListener('click') onClick() {
    this.render.setStyle(this.balise.nativeElement, 'backgroundColor', 'black');
  }

}
