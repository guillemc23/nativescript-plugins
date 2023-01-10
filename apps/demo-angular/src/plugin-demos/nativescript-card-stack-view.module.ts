import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCardStackViewComponent } from './nativescript-card-stack-view.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCardStackViewComponent }])],
  declarations: [NativescriptCardStackViewComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCardStackViewModule {}
