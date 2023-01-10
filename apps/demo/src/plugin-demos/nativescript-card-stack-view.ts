import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCardStackView } from '@demo/shared';
import {} from '@mastergui/nativescript-card-stack-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export const myDataArray = [
  {
    image: 'https://pics.filmaffinity.com/Shrek-903764423-large.jpg',
    title: 'Shrek 1',
  },
  {
    image: 'https://pics.filmaffinity.com/Shrek_2-288126730-mmed.jpg',
    title: 'Shrek 2',
  },
  {
    image: 'https://www.ecartelera.com/carteles/1400/1498/001_m.jpg',
    title: 'Shrek III',
  },
];

export class DemoModel extends DemoSharedNativescriptCardStackView {
  readonly myDataArray = [
    {
      image: 'https://pics.filmaffinity.com/Shrek-903764423-large.jpg',
      title: 'Shrek 1',
    },
    {
      image: 'https://pics.filmaffinity.com/Shrek_2-288126730-mmed.jpg',
      title: 'Shrek 2',
    },
    {
      image: 'https://www.ecartelera.com/carteles/1400/1498/001_m.jpg',
      title: 'Shrek III',
    },
  ];
}
