import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';
import { ShareModule } from './share/share.module';



const appRoutes: Routes = [
  {path: '' , redirectTo: 'main' , pathMatch: 'full' },
  {path: 'main' , loadChildren: './main/main.module#MainModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
