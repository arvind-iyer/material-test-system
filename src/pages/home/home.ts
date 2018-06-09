import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FlowFormPage } from '../flow-form/flow-form';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  isCorrosive : string = "";
  working_temp : number = 0.0;
  melting_point: number = 0.0;
  load: number =  0.0;
  flow: boolean = false;
  output : Array<string> = [];
  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {

  }
  flipBoxes() {

  }
  validateForm() {
    this.output = [];
    const t_ratio =  this.working_temp / this.melting_point;
    // if(this.working_medium == "seawater") {
    //   this.output.push("Corrosion Test");
    // }
    if (this.isCorrosive == "true") {
      this.output.push("Corrosion Test");
    }
    if (this.load > 0 && t_ratio > 0.5 ) {
      this.output.push("Creep Test");
    } 
    if (this.flow) {
      let modal = this.modalCtrl.create(FlowFormPage);
      modal.onDidDismiss(data => {
        var reynold = (data.flow_speed * data.pipe_diameter) / data.kinematic_viscosity;
        if(reynold > 4000) {
          this.output.push("Flow is turbulent");
        }
        else {
          this.output.push("Flow is laminar");
        }
      });
      modal.present();
    }
  }

}
