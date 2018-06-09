import { Component } from '@angular/core';
import { AlertController, ModalController, NavController, NavParams } from 'ionic-angular';
import { InfoModalPage } from '../info-modal/info-modal';
/**
 * Generated class for the PartAnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-part-analysis',
  templateUrl: 'part-analysis.html',
})
export class PartAnalysisPage {
  props : any = {
    bools : [
      {
        title: "Size Restriction", value: false,
        desc: [
          "Is the part size under 250 mm x 250 mm x 320 mm?"
        ]
      }, 
      {
        title: "Manufacturability", value: false,
        desc: [
          "Is the accuracy of the printer sufficient to manufacture the required part?",
          "The printing accuracy varies depending on the manufacturer. For example, YCT, a Chinese manufacturer provides printing accuracy of +/- 0.05mm",
          "Part geometry includes high tolerance part"
        ]
      },
      {
        title: "Part Obtainability", value: false,
        desc: [
          "No details provided"
        ]
      },
      {
        title: "Risk", value: false, 
        desc:[
          "Compared to the original material used, is the replaceable material material alloy available in the 3D metal printing market?"
        ]
      }
    ],
    
    nums : [
      {
        title: "Obsoleteness", value: 0, weight: 3, 
        desc: ["0 - None of the conditions below apply", 
             "1 - Part is not obsolete, but ran out of stock or requires repairs or replacements",
             "2 - Non-OEM products cannot fulfil satisfying requirements with the equipped technology",
             "3 - The part is obsolete, which means the Original Equipment Manufacturer(OEM) is no longer in business"
            ]
      },

      {
        title: "Geometric Complexity", value: 0, weight: 1,
        desc: [
          "0 - None of the conditions below apply",
          "1 - The part contains a medium level of geometric complexity",
          "2 - The part contains a high level of geometric complexity ( e.g. Hollow structure for weight reduction)"
        ]
      },

      {
        title: "Improvement", value: 0, weight: 2,
        desc: [
          "0 - No improvements by using 3D metal printing",
          "1 - Improvements can be achieved by other manufacturing methods",
          "2 - Improvements made are hard to achieve without using 3D metal printing",
          "3 - Improvements made are not achievable without using 3D metal printing"
        ]
      },
      
      {
        title: "Material", value: 0, weight: 1,
        desc: [
          "0 - No available 3D metal printing material  to satisfy comparable material properties to the original material",
          "1 - Material properties of selected 3D metal printing is equal or comparable to those of the original material",
          "2 - Some material properties of selected 3D printing is better than those of the original material",
          "3 - All critical material properties of selected 3D metal printing is better than  those of the original material"
        ]
      },

      {
        title: "Cost", value: 0, weight: 3,
        desc: [
          "0 - The total cost of the 3D metal printing is more expensive than the total cost of the original part",
          "1 - The total cost of the 3D metal printing is equal or similar to the total cost of the original part",
          "2 - The total cost of the 3D metal printing is cheaper than the total cost of the original part"
        ]
      },

      {
        title: "Urgency", value: 0, weight: 3,
        desc: [
          "0 - The part is not in urgent need",
          "1 - The part is in need within 8 weeks",
          "2 - The part is in urgent need within 5 weeks",
          "3 - The part is  in urgent need within 3 weeks"
        ]
      },

      {
        title: "Lead Time", value: 0, weight: 2,
        desc: [
          "0 - The lead time to obtain the original part from OEM takes less than a month",
          "1 - The lead time to obtain the original part from OEM takes more than a month",
          "2 - The lead time to obtain the original part from OEM takes more than 3 months",
          "3 - The lead time to obtain the original part from OEM takes more than 6 months",
        ]
      }
    ]
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }
  buttonClick(item: any) {
    this.modalCtrl.create(InfoModalPage, {item: item}).present();
  }
  validateForm() {
    var valid = true;
    this.props.bools.forEach(bool => {
      if(bool.value == false) {
        valid = false;
      }
    });
    
    if (!valid) {
      this.alertCtrl.create({
        title: "Unable to generate part score",
        message: "All requirements must be met for part to be validated properly"
      }).present();
      return;
    }
    var score = 0;
    this.props.nums.forEach(num => {
      score += num.value * num.weight;
    });
    this.alertCtrl.create({
      title: "Score",
      message: score.toString()
    }).present();
  }
}
