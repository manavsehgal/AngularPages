import {StoryModel} from './story.model';

export var StoryMock = [
  new StoryModel(
    1,
    require('../content/one-command-deploy'),
    false,
    true
  ),
  new StoryModel(
    2,
    require('../content/about-angularpages'),
    true,
    true
  ),
  new StoryModel(
    3,
    require('../content/about-angularpages'),
    false,
    false
  ),
  new StoryModel(
    4,
    require('../content/adaptive-design'),
    false,
    false
  ),
  new StoryModel(
    5,
    require('../content/about-angularpages'),
    false,
    true
  ),
  new StoryModel(
    6,
    require('../content/about-angularpages'),
    false,
    true
  ),
  new StoryModel(
    7,
    require('../content/about-angularpages'),
    false,
    true
  ),
  new StoryModel(
    8,
    require('../content/static-pages'),
    false,
    true
  ),
  new StoryModel(
    9,
    require('../content/about-angularpages'),
    false,
    true
  )
];
