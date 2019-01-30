import {NgModule} from "@angular/core";
import {ModelModule} from "./model/model.module";
import {CoreModule} from "./core/core.module";
import {MessageModule} from "./messages/message.module";
import {NewAppComponent} from "./new-app.component";
import {Routes, RouterModule} from '@angular/router';

const newAppRoutes: Routes = [
  {
    path: '',
    component: NewAppComponent
  }
];


@NgModule({
  imports: [
    ModelModule,
    CoreModule,
    MessageModule,
    RouterModule.forChild(newAppRoutes)
  ],
  declarations: [
    NewAppComponent
  ]
})
export class NewAppModule { }
