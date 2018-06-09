import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PartAnalysisPage } from '../part-analysis/part-analysis';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  homePage = HomePage;
  partAnalysisPage = PartAnalysisPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
