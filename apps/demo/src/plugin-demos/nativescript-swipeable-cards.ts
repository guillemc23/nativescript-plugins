import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSwipeableCards } from '@demo/shared';
import {} from '@mastergui/nativescript-swipeable-cards';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSwipeableCards {}
