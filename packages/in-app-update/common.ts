import { Observable } from '@nativescript/core';

export class InAppUpdateCommon extends Observable {
  static checkForUpdates() {
    console.log('>> Checking for updates...');
  }
}
