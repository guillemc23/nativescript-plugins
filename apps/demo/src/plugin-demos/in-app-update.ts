import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedInAppUpdate } from '@demo/shared';
import {} from '@mastergui/in-app-update';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedInAppUpdate {}
