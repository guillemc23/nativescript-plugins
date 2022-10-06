import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedInAppReview } from '@demo/shared';
import {} from '@mastergui/in-app-review';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedInAppReview {}
