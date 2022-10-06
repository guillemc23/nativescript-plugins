import { Observable } from '@nativescript/core';

export class InAppReviewCommon extends Observable {
  static init(eventNumber: InAppReviewConfigCommon) {
    console.log(eventNumber.daysBeforeReminding);
  }

  static count(eventNumber: InAppReviewConfigCommon) {
    console.log(eventNumber.daysUntilPrompt);
  }
}

export interface InAppReviewConfigCommon {
  daysUntilPrompt?: number;
  usesUntilPrompt?: number;
  daysBeforeReminding?: number;
  significantUsesUntilPrompt?: number;
  showLaterButton?: boolean;
  showNeverButton?: boolean;
  debugMode?: boolean;
}
