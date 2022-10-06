import { Component, NgZone } from '@angular/core';
import { DemoSharedInAppReview } from '@demo/shared';
import {} from '@mastergui/in-app-review';

@Component({
  selector: 'demo-in-app-review',
  templateUrl: 'in-app-review.component.html',
})
export class InAppReviewComponent {
  demoShared: DemoSharedInAppReview;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedInAppReview();
  }
}
