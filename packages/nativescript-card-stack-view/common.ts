import { ObservableArray } from '@nativescript/core';
import { KeyedTemplate, Observable, Property, Template, View } from '@nativescript/core';
import { addWeakEventListener, removeWeakEventListener } from '@nativescript/core';
import { GridLayout } from '@nativescript/core';
import { StackLayout } from '@nativescript/core';
import { isNullOrUndefined, isNumber } from '@nativescript/core/utils/types';
import { parse } from '@nativescript/core/ui/builder';

export class CardStackUtil {
  public static debug: boolean = false;
}

export enum CLogTypes {
  info,
  warning,
  error,
}

export const ITEMLOADING = 'itemLoading';

export const CLog = (type: CLogTypes = 0, ...args) => {
  if (CardStackUtil.debug) {
    if (type === 0) {
      // Info
      console.log('NativeScript-CardStack: INFO', args);
    } else if (type === 1) {
      // Warning
      console.log('NativeScript-CardStack: WARNING', args);
    } else if (type === 2) {
      console.log('NativeScript-CardStack: ERROR', args);
    }
  }
};

export class NativescriptCardStackViewCommon extends GridLayout {
  views: Array<View> = [];

  public static draggingEvent = 'dragging';
  public static swipedEvent = 'swiped';
  public static canceledEvent = 'canceled';
  public static rewoundEvent = 'rewound';
  public static loadedEvent = 'loaded';
  public static disappearedEvent = 'disappeared';
  public static appearedEvent = 'appeared';

  public visibleCount: number = 4;
  public ios: any;
  public android: any;
  public items: ObservableArray<Observable>;
  public topPosition;
  public itemTemplate: string | Template;
  public itemTemplates: string | Array<KeyedTemplate>;
  public selectedIndex = 0;
  public options: ICardStackOptions;

  public set debug(value: boolean) {
    CardStackUtil.debug = value;
  }

  constructor() {
    super();
  }

  _createTemplateView() {
    const view = parse(this.itemTemplate, this);
    this.views.push(view);
    this.addChild(view);

    return view;
  }

  _removeTemplateView(index) {
    const view = this.views[index];
    this.removeChild(view);
    this.views[index] = null;
  }
}

export class CardStackItem extends StackLayout {
  constructor() {
    super();
    CLog(CLogTypes.info, `CardStackItem constructor...`);
  }

  onLoaded() {
    super.onLoaded();
  }
}

export namespace knownMultiTemplates {
  export const itemTemplates = 'itemTemplates';
}

export namespace knownCollections {
  export const items = 'items';
}

export namespace knownTemplates {
  export const itemTemplate = 'itemTemplate';
}

// Common
export const itemTemplateProperty = new Property<NativescriptCardStackViewCommon, any>({
  name: 'itemTemplate',
  affectsLayout: true,
  valueChanged: (view: any, oldValue, newValue) => {
    view.refresh(true);
  },
});
itemTemplateProperty.register(NativescriptCardStackViewCommon);

export const itemsProperty = new Property<NativescriptCardStackViewCommon, ObservableArray<any>>({
  name: 'items',
  affectsLayout: true,
  valueChanged: onItemsChanged,
});
itemsProperty.register(NativescriptCardStackViewCommon);

export const optionsProperty = new Property<NativescriptCardStackViewCommon, ObservableArray<any>>({
  name: 'options',
  valueChanged: () => {},
});
optionsProperty.register(NativescriptCardStackViewCommon);

export const selectedIndexProperty = new Property<NativescriptCardStackViewCommon, number>({
  name: 'selectedIndex',
  defaultValue: 0,
  valueConverter: (value) => {
    return +value;
  },
  valueChanged: (view, oldValue, newValue) => {
    view.selectedIndex = newValue;
  },
});
selectedIndexProperty.register(NativescriptCardStackViewCommon);

function onItemsChanged(view: any, oldValue, newValue) {
  if (oldValue instanceof ObservableArray) {
    removeWeakEventListener(oldValue, ObservableArray.changeEvent, view.refresh, view);
  }

  if (newValue instanceof ObservableArray) {
    addWeakEventListener(newValue, ObservableArray.changeEvent, view.refresh, view);
  }

  if (!isNullOrUndefined(view.items) && isNumber(view.items.length)) {
    view.refresh(false);
  }
}

export interface ICardStackOptions {
  visibleCount?: number;
}
