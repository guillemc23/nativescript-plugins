import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAppRater } from '@demo/shared';
import {} from '@mastergui/app-rater';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAppRater {}
