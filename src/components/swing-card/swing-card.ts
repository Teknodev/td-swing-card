import { Component,Directive, ElementRef, OnChanges, ViewChild, Input, HostBinding, ViewContainerRef, ViewRef, EventEmitter, Output, Optional, Inject, Host, forwardRef,AfterViewInit, TemplateRef, SimpleChanges } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { SwingStackComponent } from '../swing-stack/swing-stack';

/**
 * This directive used for delete card from stack.
 */
@Directive({
  selector : '[swing-card]',
})
export class SwingCard{

  observer;
  
  constructor(private viewContainer: ViewContainerRef,private templateRef: TemplateRef<any>) {
    let embed = this.viewContainer.createEmbeddedView(this.templateRef,null,0)
    let view : HTMLElement = embed.rootNodes[0];
    this.observer = new MutationObserver(()=>{
      /**
       * Check card changes..
       */
      if(view.classList.contains('destroyed')){
        this.viewContainer.clear();
      }
    }).observe(view, { attributes: true });
  }
}

/**
 * Generated class for the SwingCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'swing-card',
  template: '<ng-content></ng-content>',
  animations: [
    trigger("throw",[
      state("right", style({transform: ' translate(800px,400px) rotate(-90deg)', transition : '600ms ease-in'})),
      state("left", style({transform: ' translate(-800px,400px) rotate(-90deg)', transition : '600ms ease-in'})),
    ])
  ]
})
export class SwingCardComponent implements AfterViewInit{

  /**
   * Used for emit animations programmatically.
   */
  @Input() @HostBinding('@throw') throw : string;
 
  /**
   * Swing card instance.
   */
  public card : any;
  
  constructor(public elementRef : ElementRef,@Optional() @Host() @Inject(forwardRef(() => SwingStackComponent)) protected stack: SwingStackComponent) {
  
  }

  ngAfterViewInit(): void {
    
    this.card = this.stack.createCard(this.elementRef.nativeElement);
    this.card.on('throwout',()=>{
      this.removeCard();
    });
  }

  throwLeft() : void{
    this.throw = "left";
    setTimeout(()=>{  
      this.removeCard();
    },600)
  }

  throwRight() : void{
    this.throw = "right";
    setTimeout(()=>{
      this.removeCard();
    },600)
  }

  private removeCard()
  {
    this.elementRef.nativeElement.classList.add('destroyed');
    this.card.destroy();
  }
}
