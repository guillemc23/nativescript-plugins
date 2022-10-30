import { Application } from '@nativescript/core';
import { InAppUpdateCommon } from './common';

export class InAppUpdate extends InAppUpdateCommon {
  static checkForUpdates() {
    console.log('>> Checking for updates...');
    const androidActivity = Application.android.foregroundActivity;
    // const update = org.mastergui.updates.InAppUpdate(androidActivity);
    // update.init();
  }
}
