import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the AddtransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtransaction',
  templateUrl: 'addtransaction.html',
})
export class AddtransactionPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private datePicker: DatePicker) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtransactionPage');
  }

}
