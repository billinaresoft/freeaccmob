import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { CustomerPage } from '../pages/customer/customer';
import { AddcustomerPage } from '../pages/addcustomer/addcustomer';
import { CompanyPage } from '../pages/company/company';
import { TransactionPage } from '../pages/transaction/transaction';
import { AddtransactionPage } from '../pages/addtransaction/addtransaction';
import { DayendPage } from '../pages/dayend/dayend';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    CustomerPage,
    AddcustomerPage,
    CompanyPage,
    TransactionPage,
    AddtransactionPage,
    DayendPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListPage,
    CustomerPage,
    AddcustomerPage,
    CompanyPage,
    TransactionPage,
    AddtransactionPage,
    DayendPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
