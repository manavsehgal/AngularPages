import {RouteDefinition} from 'angular2/router';

import {FeatureCards} from './feature/feature-cards';
import {ReleaseList} from './release/release-list';
import {Story} from './story/story';
import {MarkdownStatic} from './markdown-static/markdown-static';
import {FireStart} from './fire-start/fire-start';

// Ref: https://angular.io/docs/js/latest/api/router/RouteDefinition-interface.html

export const Routes = {
  home: {
    path: '/home',
    as: 'Home',
    component: FeatureCards
  },
  releases: {
    path: '/releases',
    as: 'Releases',
    component: ReleaseList
  },
  firestart: {
    path: '/fire-start',
    as: 'FireStart',
    component: FireStart
  },
  story: {
    path: '/story/:id',
    as: 'Story',
    component: Story
  },
  catchall: {
    path: '/**',
    redirectTo: ['Home']
  }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);
