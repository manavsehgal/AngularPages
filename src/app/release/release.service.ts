import {ReleaseMock} from './release.mock';
import {Injectable} from 'angular2/core';

@Injectable()
export class ReleaseService {
  getReleases() {
    return Promise.resolve(ReleaseMock);
  }
}
