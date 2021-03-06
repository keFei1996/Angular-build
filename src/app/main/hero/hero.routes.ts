import {HeroComponent} from "./hero.component";
import {Routes} from "@angular/router";
import {ThreeComponent} from "./three/three.component";
import {Test01Component} from "./test01/test01.component";
import {Test02Component} from "./test02/test02.component";

export const heroRoutes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      { path: '', redirectTo: 'three' , pathMatch: 'full'},
      { path: 'three', component: ThreeComponent },
      { path: 'test01', component: Test01Component },
      { path: 'test02', component:  Test02Component },
    ]
  }
];
