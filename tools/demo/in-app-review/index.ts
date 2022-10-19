import { DemoSharedBase } from '../utils';
import { InAppReview } from '@mastergui/in-app-review';

export class DemoSharedInAppReview extends DemoSharedBase {
  init() {
    InAppReview.init();
  }

  launch() {
    InAppReview.showReviewDialog();
  }
}
