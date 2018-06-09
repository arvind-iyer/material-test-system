import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FlowFormPage } from '../flow-form/flow-form';

interface TestResult {
  title : string;
  documentation?: string;
  standards?: string;
}

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
  output : Array<TestResult> = [];
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
      this.output.push({
        title: "Corrosion Test (ASTM-B117)", 
        standards: "ASTM_B117.pdf", 
        documentation: "ASTM_B117.pdf"});
    }
    if (this.load > 0 && t_ratio > 0.5 ) {
      this.output.push({title: "Creep Test"});
    } 
    if (this.flow) {
      let modal = this.modalCtrl.create(FlowFormPage);
      modal.onDidDismiss(data => {
        var reynold = (data.flow_speed * data.pipe_diameter) / data.kinematic_viscosity;
        if(reynold > 4000) {
          this.output.push({title: "Flow is turbulent"});
        }
        else {
          this.output.push({title: "Flow is laminar"});
        }
      });
      modal.present();
    }
  }

}
