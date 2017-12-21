import { Component, ContentChildren, QueryList , Input } from '@angular/core';
import { SwingCardComponent } from '../swing-card/swing-card';
import * as Swing from 'swing'

/**
 * Generated class for the SwingStackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'swing-stack',
  template: '<ng-content></ng-content>'
})
export class SwingStackComponent{
 

  @Input('config') config : any = {}; 

  /**
   * List of card components in stack.
   * @var cards
   */
  @ContentChildren(SwingCardComponent) 
  public cards : QueryList<SwingCardComponent>;

  /**
   * Swing stack instance.
   * @var stack
   */
  public stack : any;


  ngOnInit() {
    /**
     * Construct new swing stack instance.
     */
    this.stack = Swing.Stack(this.config);
    console.log(this.stack.getConfig());
  }


  /**
   * Returns swing card instance of a element.
   * @param element native element of card component. See (swing-card.ts)
   */
  getCard(element : Element)
  {
    return this.stack.getCard(element);
  }


  /**
   * Creates a swing card instance.
   * @param element target element for create new card.
   */
  createCard(element : Element)
  {
    return this.stack.createCard(element);
  }
}
