import 'reflect-metadata';
import 'zone.js';

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'app',
  template: `
  <div>
    <h1>Hello, {{ name }}!</h1>
    name: <input type="text" [value]="name" (input)="name = $event.target.value" autofocus>
  </div>
  `
})

@RouteConfig([
  { path: '/', component: App, name: 'App' }
])

export class App {
  constructor() {
    this.name = 'Alice'
  }
}
