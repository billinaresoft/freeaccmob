import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { AddtransactionPage } from '../addtransaction/addtransaction';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
  icons: string[];
  items: Array<{title: string, note: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [];
    this.items = [
      { title: 'Trans01', note: 'df' },
      { title: 'Trans02', note: 'df'},
      { title: 'Trans03', note: 'df' }
     
    ];
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }
  dismiss(){
    this.navCtrl.setRoot (HomePage);
    this.navCtrl.popToRoot ();       
    }
    AddTransaction(){
      this.navCtrl.push(AddtransactionPage);
  }
}
