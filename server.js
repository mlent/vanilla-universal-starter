import express from 'express';
import { ng2engine, REQUEST_URL, NODE_LOCATION_PROVIDERS } from 'angular2-universal-preview';
import { provide, enableProdMode } from 'angular2/core';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import { App } from './dist/server';

let app = express();
enableProdMode();

app.engine('.html', ng2engine);
app.set('views', './dist/');
app.set('view engine', 'html');

app.use(express.static('./client/'));

app.use('/', (req, res) => {
  let url = req.originalUrl || '/';
  res.render('index', {
    App,
    providers: [
      provide(APP_BASE_HREF, { useValue: '/' }),
      provide(REQUEST_URL, { useValue: url }),
      ROUTER_PROVIDERS,
      NODE_LOCATION_PROVIDERS
    ],
    preboot: true
  });
});

app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
