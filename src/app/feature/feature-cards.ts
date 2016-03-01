import {Component} from 'angular2/core';
import {FeatureService} from './feature.service';
import {FeatureModel} from './feature.model';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes} from '../route.config';

@Component({
  selector: 'ap-feature-cards',
  styles: [require('./feature-cards.scss')],
  providers: [FeatureService],
  template: require('./feature-cards.html')
})

export class FeatureCards {
  constructor(private _featureService: FeatureService, private _router: Router) { }

  public features: FeatureModel[];

  getFeatures() {
    this._featureService.getFeatures().then(features => this.features = features);
  }

  showStory(feature: FeatureModel) {
    this._router.navigate(['/' + Routes.story.as, {id: feature.id}]);
  }

  ngOnInit() {
    this.getFeatures();
  }

}
