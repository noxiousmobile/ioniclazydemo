import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefaultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})
export class DefaultPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  public openPage (name: string) : void {
  this.nav.setRoot(name);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

}
