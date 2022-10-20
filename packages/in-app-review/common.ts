import { Observable } from '@nativescript/core';

export class InAppReviewCommon extends Observable {
  /**
   * Initializes a ReviewManager instance, retrieving all the info necessary from Google Play Review API.
   *
   * Call this method at app start or before intending to show the dialog to pre-cache the reviewInfo object to use to show
   * in-app review dialog later.
   *
   * @remarks Not needed for iOS
   */
  static init(): void {
    console.log('>> Initializing In App Review flow...');
  }

  /**
   * Tries to show the Review dialog. It's Google or Apple who decides to show it or not depending on its quota of how often the review dialog can be shown or if the user has already rated the app. @link https://developer.android.com/guide/playcore/in-app-review#quotas @link https://developer.apple.com/documentation/storekit/skstorereviewcontroller
   * @remarks Must be called AFTER init() on Android
   */
  static showReviewDialog(): void {
    console.log('>> Showing review dialog...');
  }
}
