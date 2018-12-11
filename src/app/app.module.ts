import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';



const appRoutes: Routes = [
  {path: '' , redirectTo: 'main' , pathMatch: 'full' },
  {path: 'main' , loadChildren: './main/main.module#MainModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
