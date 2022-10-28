import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { InAppUpdateComponent } from './in-app-update.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: InAppUpdateComponent }])],
  declarations: [InAppUpdateComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InAppUpdateModule {}
