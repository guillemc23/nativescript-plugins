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

export interface InAppReviewBase {
  ios?: any;
  android?: any;
  init(configs?: InAppReviewConfigCommon): void;
  getKotlinReviewInfo(): void;
  incrementSignificantUsageCount(): void;
  showRateDialogIfMeetsConditions(): boolean;
  showRateDialog(): void;
  setDaysUntilPrompt(days: number): InAppReviewBase;
  setUsesUntilPrompt(uses: number): InAppReviewBase;
  setSignificantUsesUntilPrompt(uses: number): InAppReviewBase;
  setDaysBeforeReminding(days: number): InAppReviewBase;
  setDebugMode(debug: boolean): InAppReviewBase;
  setShowLaterButton(value: boolean): InAppReviewBase;
  setShowNeverButton(value: boolean): InAppReviewBase;
}

export interface InAppReviewConfigs {
  daysUntilPrompt?: number;
  usesUntilPrompt?: number;
  daysBeforeReminding?: number;
  significantUsesUntilPrompt?: number;
  showLaterButton?: boolean;
  showNeverButton?: boolean;
  debugMode?: boolean;
}

export const defaultConfigs: InAppReviewConfigs = {
  daysUntilPrompt: 7,
  usesUntilPrompt: 3,
  daysBeforeReminding: 5,
  significantUsesUntilPrompt: 0,
  showLaterButton: true,
  showNeverButton: true,
  debugMode: false,
};
