import { Device } from '@nativescript/core/platform';
import { InAppReviewCommon } from './common';

export class InAppReview extends InAppReviewCommon {
  static init(): void {
    console.log('>> No need to run init on iOS! :-)');
  }

  static showReviewDialog(): void {
    console.log('>> Starting review flow...');
    try {
      let iosVersion = +Device.osVersion;
      if (iosVersion > 13) {
        SKStoreReviewController.requestReviewInScene(UIApplication.sharedApplication.keyWindow.rootViewController.view.window.windowScene);
      } else {
        SKStoreReviewController.requestReview();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
