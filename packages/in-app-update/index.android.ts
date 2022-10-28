import { InAppUpdateCommon } from './common';

export class InAppUpdate extends InAppUpdateCommon {
  static checkForUpdates() {
    console.log('>> Checking for updates...');
  }
}
