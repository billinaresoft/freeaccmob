import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayendPage } from './dayend';

@NgModule({
  declarations: [
    DayendPage,
  ],
  imports: [
    IonicPageModule.forChild(DayendPage),
  ],
})
export class DayendPageModule {}
