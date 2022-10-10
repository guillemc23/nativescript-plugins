import { DemoSharedBase } from '../utils';
import { appRater } from '@mastergui/app-rater';

export class DemoSharedAppRater extends DemoSharedBase {
  testIt() {
    appRater.init({
      showNeverButton: false,
      debugMode: true,
    });

    // // check
    // appRater.showRateDialogIfMeetsConditions();

    // show directly
    appRater.showRateDialog();
    console.log('test app-rater!');
  }
}
