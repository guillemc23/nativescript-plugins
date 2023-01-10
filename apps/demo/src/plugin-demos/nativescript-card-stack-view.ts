import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCardStackView } from '@demo/shared';
import {} from '@mastergui/nativescript-card-stack-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptCardStackView {}
