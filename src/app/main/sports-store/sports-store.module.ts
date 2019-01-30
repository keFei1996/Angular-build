import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {sportsRoutes} from "./sports-store.routes";
import {SportsStoreComponent} from "./sports-store.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sportsRoutes)
  ],
  declarations: [
    SportsStoreComponent
  ]
})
export class SportsStoreModule { }
