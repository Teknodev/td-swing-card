import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwingStackComponent } from '../../components/swing-stack/swing-stack';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(SwingStackComponent) stack : SwingStackComponent;


  cardsDummy: Array<any> = [
    { 
      name: 'Nancy Ahmad',
      picture : 'https://api.adorable.io/avatars/200/abott@adorable.png',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
      feedback: null
    },
    { 
      name: 'Nancy Ahmad',
      picture : 'https://api.adorable.io/avatars/285/sad.png',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
      feedback: null
    }
  ]
  
  config = {
    throwOutConfidence: function (xOffset, yOffset, element) {
      console.log(xOffset,yOffset,element.offsetWidth);
        return Math.min(Math.abs(xOffset) / (element.offsetWidth / 4.5 ), 1);
    }
  };

  pass()
  {
    if(this.stack.cards.length<1) return;
    let card = this.stack.cards.last;
    card.elementRef.nativeElement.classList.add('pass');
    card.throwLeft();
  }

  meet()
  {
    if(this.stack.cards.length<1) return;
    let card = this.stack.cards.last;
    card.elementRef.nativeElement.classList.add('meet');
    card.throwRight();
  }

  add()
  {
    this.cardsDummy.push( { 
      name: 'Nancy Ahmad',
      picture : 'https://picsum.photos/200/200',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
      feedback: null
    });
  }

}
