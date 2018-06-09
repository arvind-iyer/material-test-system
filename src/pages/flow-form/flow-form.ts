import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FlowFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-flow-form',
  templateUrl: 'flow-form.html',
})
export class FlowFormPage {
  flow_speed : number;
  kinematic_viscosity: number;
  pipe_diameter: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowFormPage');
  }

  submit() {
    
    var data = {
      flow_speed: this.flow_speed,
      pipe_diameter: this.pipe_diameter,
      kinematic_viscosity: this.kinematic_viscosity
    };


    this.viewCtrl.dismiss(data);
  }
}
