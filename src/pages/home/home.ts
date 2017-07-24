import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DemoDataProviderService } from '../../app/services/demo-data-provider.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private dataService_: DemoDataProviderService) {

  }

  currentValue: string = 'data1';

  valuesList: Array<string> = this.dataService_.getDataList();

  selectDataSet() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select the data set:');

    for (let i = 0; i < this.valuesList.length; i++) {
      let data = this.valuesList[i];
      alert.addInput({
        type: 'radio',
        label: data,
        value: data,
        checked: data == this.currentValue
      });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.currentValue = data;
        this.dataService_.setCurrentDataSet(this.currentValue);
      }
    });
    alert.present();
  }

}
