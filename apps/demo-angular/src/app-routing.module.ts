import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'app-rater', loadChildren: () => import('./plugin-demos/app-rater.module').then((m) => m.AppRaterModule) },
  { path: 'in-app-review', loadChildren: () => import('./plugin-demos/in-app-review.module').then((m) => m.InAppReviewModule) },
  { path: 'in-app-update', loadChildren: () => import('./plugin-demos/in-app-update.module').then((m) => m.InAppUpdateModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
