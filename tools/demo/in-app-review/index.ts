import { DemoSharedBase } from '../utils';
import { InAppReview, InAppReviewConfig, inAppReviewer } from '@mastergui/in-app-review';

export class DemoSharedInAppReview extends DemoSharedBase {
  init(defaultConfigs: InAppReviewConfig) {
    InAppReview.init();
    // inAppReviewer.init();

    // InAppReview.init({
    //   daysUntilPrompt: 7,
    //   usesUntilPrompt: 3,
    //   daysBeforeReminding: 5,
    //   significantUsesUntilPrompt: 0,
    //   showLaterButton: true,
    //   showNeverButton: true,
    //   debugMode: false,
    // });
  }

  launch() {
    console.log('In app review launched!');
  }
}
