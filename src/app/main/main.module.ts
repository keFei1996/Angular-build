import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {MainComponent} from './main.component';
import {TimesComponent} from './times/times.component';
import {ShareModule} from '../share/share.module';
import { TimesDirective } from './times/times.directive';
import { FormControlComponent } from './form-control/form-control.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpComponent } from './http/http.component';
import { FormControlDirective } from './form-control/form-control.directive';
import { AnimationsComponent } from './animations/animations.component';
import { CeShiComponent } from './ceShi/ceshi.component';



export const mainRoutes: Routes = [
  {
    path: '' ,
    component : MainComponent,
    children: [
      { path: '', redirectTo: 'hero', pathMatch: 'full'},
      { path: 'hero', component: HeroComponent},
      { path : 'time', component : TimesComponent},
      { path : 'form' , component : FormControlComponent } ,
      { path : 'http' , component : HttpComponent } ,
      { path: 'animations' , component : AnimationsComponent},
      { path: 'ceShi' , component : CeShiComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    MainComponent,
    TimesComponent,
    HeroComponent,
    TimesDirective,
    FormControlComponent,
    FormControlDirective,
    AnimationsComponent,
    CeShiComponent,
    HttpComponent
  ]
})
export class MainModule { }
