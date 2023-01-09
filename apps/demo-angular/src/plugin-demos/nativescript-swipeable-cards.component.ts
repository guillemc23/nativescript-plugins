import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSwipeableCards } from '@demo/shared';
import {} from '@mastergui/nativescript-swipeable-cards';

@Component({
  selector: 'demo-nativescript-swipeable-cards',
  templateUrl: 'nativescript-swipeable-cards.component.html',
})
export class NativescriptSwipeableCardsComponent {
  demoShared: DemoSharedNativescriptSwipeableCards;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptSwipeableCards();
  }
}
