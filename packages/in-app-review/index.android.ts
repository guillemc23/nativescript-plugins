import { InAppReviewCommon } from './common';

declare const reviewManager: com.google.android.play.core.review.testing.FakeReviewManager;

export class InAppReview extends InAppReviewCommon {
  static init() {
    console.log('>> Init Android');
  }
}
