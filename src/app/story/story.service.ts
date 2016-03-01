import {StoryMock} from './story.mock';
import {Injectable} from 'angular2/core';
import {StoryModel} from './story.model';

@Injectable()
export class StoryService {
  getStory(id: number): Promise<StoryModel> {
    return Promise.resolve(StoryMock).then((stories) => {
      for (var story of stories) {
        if (story.id === id) {
          return story;
        }
      }
    });
  }
}
