import {HeroComponent} from "./hero.component";
import {Routes} from "@angular/router";
import {ThreeComponent} from "./three/three.component";

export const heroRoutes: Routes = [
  {
    path: '',
    component: HeroComponent,
    children: [
      { path: '', redirectTo: 'three' , pathMatch: 'full'},
      { path: 'three', component: ThreeComponent },
    ]
  }
];
