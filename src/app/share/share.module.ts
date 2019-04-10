import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxEchartsModule} from 'ngx-echarts';
import {DaterangepickerDirective} from "../directive/daterangepicker.directive";
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule
    // BrowserAnimationsModule,
  ],
  declarations: [
    DaterangepickerDirective
  ],
  exports: [
    NgxEchartsModule,
    DaterangepickerDirective
    // BrowserAnimationsModule
  ]
})
export class ShareModule { }
