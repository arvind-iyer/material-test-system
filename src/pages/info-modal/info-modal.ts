import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info-modal',
  templateUrl: 'info-modal.html',
})
export class InfoModalPage {
  item:  any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

}
