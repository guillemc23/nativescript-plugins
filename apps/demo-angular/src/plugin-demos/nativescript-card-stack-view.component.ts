import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptCardStackView } from '@demo/shared';
import {} from '@mastergui/nativescript-card-stack-view';

@Component({
  selector: 'demo-nativescript-card-stack-view',
  templateUrl: 'nativescript-card-stack-view.component.html',
})
export class NativescriptCardStackViewComponent {
  demoShared: DemoSharedNativescriptCardStackView;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptCardStackView();
  }
}
