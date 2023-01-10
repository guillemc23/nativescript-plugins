import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSwipeableCards } from '@demo/shared';
import {} from '@mastergui/nativescript-swipeable-cards';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSwipeableCards {
  myDataArray = [
    {
      image: 'https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest?cb=20100719002911&path-prefix=es',
      title: 'Shrek 1',
    },
    {
      image: 'https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest?cb=20100719002911&path-prefix=es',
      title: 'Shrek 3',
    },
    {
      image: 'https://static.wikia.nocookie.net/shrek/images/3/3f/Portada_img.jpg/revision/latest?cb=20100719002911&path-prefix=es',
      title: 'Shrek III',
    },
  ];
}
