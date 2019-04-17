import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeComponent } from './three/three.component';
import {RouterModule} from "@angular/router";
import {heroRoutes} from "./hero.routes";
import {HeroComponent} from "./hero.component";
import {ShareModule} from "../../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(heroRoutes),
    ShareModule
  ],
  declarations: [ThreeComponent, HeroComponent],
})
export class HeroModule {}
