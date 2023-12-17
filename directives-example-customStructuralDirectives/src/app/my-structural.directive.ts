import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  standalone: true,
})
export class MyStructuralDirective implements OnChanges {
  //in order to take the directive, which we declared in the app.component.html file, use the @Input() as below:
  @Input() appMyStructural: boolean = false;

  //refers to the FIFTH varaint in the HTML, we take it's value from there:
  @Input()myTmpProp:any;

  //At this point we have written all code and relation inbetween the .html, the .ts and the .directive.ts file,
  //and we want to wrap this whole code LOGIC in a template, which will make it more universally accessable.
  //For that purpose we need to use the TemplateRef<any> class.
  //Next, add private vcRef: ViewContainerRef.
  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log('-----------------------------------------');
    console.log('templateRef', this.templateRef);

    console.log('myTmpProp', this.myTmpProp)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const template = this.templateRef || this.myTmpProp;
    
/*     if(!template){
      return;
    } */

    console.log(changes);
    console.log(this.appMyStructural);

    //after we have implemented the ViewContainerRef class in the constructor, we ca write this code:
    if (this.appMyStructural) {
      //Practically this code is the equivalent of the '*ngIf=""' which is built-in and does the same -> makes the whole structure (not only an htmlElement) reappear.
      this.vcRef.createEmbeddedView(this.templateRef, {
        value: 'value From NgOnChanges 123',
        $implicit: 'this data is implicitly added', //$implicit is a built-in keyword
      });
    } else {
      this.vcRef.clear();
    }
  }
}
