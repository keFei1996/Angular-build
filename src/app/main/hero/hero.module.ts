import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three/three.component';
import {RouterModule} from "@angular/router";
import {heroRoutes} from "./hero.routes";
import {HeroComponent} from "./hero.component";
import {ShareModule} from "../../share/share.module";
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroRoutes),
    ShareModule
  ],
  declarations: [ThreeComponent, HeroComponent, Test01Component, Test02Component],
})
export class HeroModule {}
