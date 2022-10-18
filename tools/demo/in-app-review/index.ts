import { DemoSharedBase } from '../utils';
import { InAppReview, InAppReviewConfig, inAppReviewer } from '@mastergui/in-app-review';

export class DemoSharedInAppReview extends DemoSharedBase {
  init(defaultConfigs: InAppReviewConfig) {
    console.log('Getting review info...');
    InAppReview.getReviewInfo();
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
    console.log('Starting review flow...');
    InAppReview.startReviewFlow();
  }

  testKotlin() {
    InAppReview.getKotlinReviewInfo();
  }
}
