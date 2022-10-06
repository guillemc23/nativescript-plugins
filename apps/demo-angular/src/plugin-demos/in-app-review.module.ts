import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { InAppReviewComponent } from './in-app-review.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: InAppReviewComponent }])],
  declarations: [InAppReviewComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class InAppReviewModule {}
