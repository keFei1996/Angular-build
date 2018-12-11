import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxEchartsModule} from 'ngx-echarts';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    // BrowserAnimationsModule,
  ],
  declarations: [],
  exports: [
    NgxEchartsModule,
    // BrowserAnimationsModule
  ]
})
export class ShareModule { }