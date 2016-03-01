import {Component} from 'angular2/core';
import {ReleaseService} from './release.service';
import {ReleaseModel} from './release.model';
import {ReleaseSplit} from './release-split.pipe';

@Component({
  selector: 'ap-release-list',
  styles: [require('./release-list.scss')],
  providers: [ReleaseService],
  template: require('./release-list.html'),
  pipes: [ReleaseSplit]
})

export class ReleaseList {
  constructor(private _releaseService: ReleaseService) { }

  public releases: ReleaseModel[];

  getReleases() {
    this._releaseService.getReleases().then(releases => this.releases = releases);
  }

  ngOnInit() {
    this.getReleases();
  }

}
