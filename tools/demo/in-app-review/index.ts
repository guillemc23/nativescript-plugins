import { DemoSharedBase } from '../utils';
import { InAppReview, InAppReviewConfig } from '@mastergui/in-app-review';

export class DemoSharedInAppReview extends DemoSharedBase {
  testIt(defaultConfigs: InAppReviewConfig) {
    InAppReview.init({
      daysUntilPrompt: 7,
      usesUntilPrompt: 3,
      daysBeforeReminding: 5,
      significantUsesUntilPrompt: 0,
      showLaterButton: true,
      showNeverButton: true,
      debugMode: false,
    });
  }
}
