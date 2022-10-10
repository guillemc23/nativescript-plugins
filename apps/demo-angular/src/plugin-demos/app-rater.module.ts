import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AppRaterComponent } from './app-rater.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AppRaterComponent }])],
  declarations: [AppRaterComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppRaterModule {}
