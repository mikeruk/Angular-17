import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]',
  standalone: true,
})
export class HighlightOnMoveDirective implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  unsubscribeFromEvents: (() => void)[] = [];

  ngOnInit(): void {
    console.log(this.elRef);
    //throw new Error('Method not implemented.');
    //this.elRef.nativeElement.style.backgroundColor = 'yellow';
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    //this.renderer.listen(this.elRef.nativeElement, 'mouseenter', (event: MouseEvent) => this.mouseEnterHandler(event));

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseenter',
        this.mouseEnterHandler.bind(this)
      )
    );

    this.unsubscribeFromEvents.push(
      this.renderer.listen(
        this.elRef.nativeElement,
        'mouseleave',
        this.mouseLeaveHandler.bind(this)
      )
    );
  }

  mouseEnterHandler(e: MouseEvent): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    console.log('enter' + e);
  }

  mouseLeaveHandler(e: MouseEvent): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    );
    console.log('leave' + e);
  }

  //Basically we can choose when to execute the methods above.
  //Either we can run them on init (simply dont execute that code below),
  //OR we can execute them on destroy - execute the code below:
  ngOnDestroy(): void {
    this.unsubscribeFromEvents.forEach((fn) => fn());
  }

  //Another type of directlive: @HostListener
  //this code below is the equivelent of writing this code in the html file:
  //<div (mouseover)="mouseOverHandler($event)">
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log(e);
  }
}
