/*
 * Angular 2 decorators and services
 */
import {Component, provide} from 'angular2/core';
import {RouterActive} from './directives/router-active';
import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ],
  directives: [ ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [
    require('./app.scss'),
    require('./wrapper.scss'),
    require('./nav.scss')
  ],
  template: require('./app.html')
})

// @AngularPages: Separate routes to own file https://youtu.be/LS3aewTkfHI?t=14m30s

@RouteConfig(APP_ROUTES)

export class App {
  name = 'AngularPages';
  url = 'https://twitter.com/AngularPages';
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
