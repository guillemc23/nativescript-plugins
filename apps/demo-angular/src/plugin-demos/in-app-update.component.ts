import { Component, NgZone } from '@angular/core';
import { DemoSharedInAppUpdate } from '@demo/shared';
import {} from '@mastergui/in-app-update';

@Component({
  selector: 'demo-in-app-update',
  templateUrl: 'in-app-update.component.html',
})
export class InAppUpdateComponent {
  demoShared: DemoSharedInAppUpdate;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedInAppUpdate();
  }
}
