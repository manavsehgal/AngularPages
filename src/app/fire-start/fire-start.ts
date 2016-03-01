import {Component} from 'angular2/core';
var Firebase = require('firebase');

@Component({
  selector: 'ap-fire-start',
  template: require('./fire-start.html')
})

export class FireStart {
  myRootRef = new Firebase('https://angularpages.firebaseio.com/');

  addMessage() {
    this.myRootRef.set('Yo! hello world! ' + Date().toString());
  }
}
