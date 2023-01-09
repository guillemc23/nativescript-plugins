import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSwipeableCardsComponent } from './nativescript-swipeable-cards.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSwipeableCardsComponent }])],
  declarations: [NativescriptSwipeableCardsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSwipeableCardsModule {}
