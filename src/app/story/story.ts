import {Component} from 'angular2/core';
import {StoryService} from './story.service';
import {StoryModel} from './story.model';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from '../route.config';

@Component({
  selector: 'ap-story',
  providers: [StoryService],
  styles: [require('./story.scss')],
  template: require('./story.html'),
  directives: [ROUTER_DIRECTIVES]
})

export class Story {
  routes = Routes;
  story: StoryModel;
  linkName: string;
  constructor(private _storyService: StoryService,
              private _routeParams: RouteParams) {

    let id = parseInt(_routeParams.get('id'), 10);
    this._storyService.getStory(id).then(story => this.story = story);
  }

}
