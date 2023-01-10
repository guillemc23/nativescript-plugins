import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'in-app-review',
    },
    {
      name: 'in-app-update',
    },
    {
      name: 'nativescript-card-stack-view',
    },
  ];
}
