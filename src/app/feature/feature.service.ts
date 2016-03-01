import {FeatureMock} from './feature.mock';
import {Injectable} from 'angular2/core';

@Injectable()
export class FeatureService {
  getFeatures() {
    return Promise.resolve(FeatureMock);
  }
}
