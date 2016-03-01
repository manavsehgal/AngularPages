import {ReleaseModel} from './release.model';

export var ReleaseMock = [
  new ReleaseModel(
    '2016-01-29',
    'Story component',
    `Publish multiple static pages using YAML markup with one Story component.
    YAML structure is available as JS object within component template.
    You can develop your own rendering logic based on YAML structure.`
  ),
  new ReleaseModel(
    '2016-01-28',
    'Release component',
    `Release component creates a list using Flexbox layout. Duplicate and
    modified using Feature component. Lists release log chronologically.`
  ),
  new ReleaseModel(
    '2016-01-26',
    'Flexbox layout at component level',
    `Duplicate and delete friendly self-contained component level styling
    using Flexbox layouts. Feature and Release components use Flexbox layout.
    Similar component schema is rendered differently for both components
    using minor Sass changes.`
  ),
  new ReleaseModel(
    '2016-01-26',
    'Model and mock for component',
    `Feature and Release components use model and mock to define component
    schema and add mock entries to the data model.`
  ),
  new ReleaseModel(
    '2016-01-24',
    'Feature component',
    `Duplicate and delete friendly component with data model, mock, template,
    style, and provider.`
  ),
  new ReleaseModel(
    '2016-01-22',
    'Scss theming at app level',
    `Variable configurable theme at app level, drives common styles across
    components.`
  ),
  new ReleaseModel(
    '2016-01-21',
    'Router config',
    `Separation of router configuration in route.config.ts. Define custom
    routes for multiple components showing up using main navigation.`
  )
];
