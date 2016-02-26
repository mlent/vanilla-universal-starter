import 'reflect-metadata';
import 'zone.js';

import { bootstrap } from 'angular2-universal-preview';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { App } from 'universal-app';

bootstrap(App, [...ROUTER_PROVIDERS]);
