import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwingStackComponent, SwingCardComponent } from 'angular2-swing'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(SwingStackComponent) stack : SwingStackComponent;
  @ViewChildren(SwingCardComponent) cards : QueryList<SwingCardComponent>;

  cardsDummy: Array<any> = [
    { 
      name: 'Nancy Ahmad',
      picture : '',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
    },
    { 
      name: 'Nancy Ahmad',
      picture : '',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
    },
    { 
      name: 'Nancy Ahmad',
      picture : '',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
    },
        { 
      name: 'Nancy Ahmad',
      picture : '',
      position : 'Human Resources Manager',
      description :  "Guiatr Learning",
    }
  ]
  constructor(public navCtrl: NavController) {

  }

  voteUp(operation : boolean)
  {
    if(operation)
    {

    }
    console.log(this.cards.last.getCard());

  }

}
