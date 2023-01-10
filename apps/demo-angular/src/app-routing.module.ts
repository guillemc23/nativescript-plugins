import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'in-app-review', loadChildren: () => import('./plugin-demos/in-app-review.module').then((m) => m.InAppReviewModule) },
  { path: 'in-app-update', loadChildren: () => import('./plugin-demos/in-app-update.module').then((m) => m.InAppUpdateModule) },
  { path: 'nativescript-card-stack-view', loadChildren: () => import('./plugin-demos/nativescript-card-stack-view.module').then((m) => m.NativescriptCardStackViewModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
