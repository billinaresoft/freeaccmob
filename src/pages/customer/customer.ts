import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { DayendPage } from '../dayend/dayend';
import { AddcustomerPage } from '../addcustomer/addcustomer';
import {HomePage} from '../home/home';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
 
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    //this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
     // var data = data.data.children;
  //});
    this.items = [];
    //for (let i = 1; i < 11; i++) {
      //this.items.push({
        //title: 'Item ' + i,
        //note: 'This is item #' + i,
        //icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      //});
    //}

    this.items = [
      { title: 'Test01', note: 'df' },
      { title: 'Test02', note: 'df'},
      { title: 'Test03', note: 'df' }
     
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }
 
  AddCustomer(){
      this.navCtrl.push(AddcustomerPage);
  }
  dologin(){
console.log('Test');
  }

  dismiss(){
      this.navCtrl.setRoot (HomePage);
      this.navCtrl.popToRoot ();       
      }
    }
