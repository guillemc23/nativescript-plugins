import { InAppReviewCommon } from './common';
import { Application, Utils } from '@nativescript/core';

export class InAppReview extends InAppReviewCommon {
  static init(): void {
    console.log('>> Initializing Review Manager...');
    this.getReviewInfo();
  }

  static showReviewDialog(): void {
    console.log('>> Starting review flow...');
    this.startReviewFlow();
  }

  private static getReviewInfo() {
    const review = org.mastergui.reviews.InAppReview;
    const androidContext = Utils.android.getApplicationContext();
    const androidActivity = Application.android.foregroundActivity;
    review.getReviewInfo(androidContext, androidActivity, __DEV__);
  }

  private static startReviewFlow() {
    const review = org.mastergui.reviews.InAppReview;
    const androidContext = Utils.android.getApplicationContext();
    const androidActivity = Application.android.foregroundActivity;
    review.startReviewFlow(androidContext, androidActivity, __DEV__);
  }
}
