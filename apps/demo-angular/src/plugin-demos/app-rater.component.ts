import { Component, NgZone } from '@angular/core';
import { DemoSharedAppRater } from '@demo/shared';
import {} from '@mastergui/app-rater';

@Component({
  selector: 'demo-app-rater',
  templateUrl: 'app-rater.component.html',
})
export class AppRaterComponent {
  demoShared: DemoSharedAppRater;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAppRater();
  }
}
