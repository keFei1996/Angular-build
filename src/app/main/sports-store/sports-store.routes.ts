import {Routes} from '@angular/router';
import {SportsStoreComponent} from "./sports-store.component";
import {NewAppComponent} from "./new-app/new-app.component";

export const sportsRoutes: Routes = [
  {
    path: '',
    component: SportsStoreComponent,
    children: [
      { path: '', redirectTo: 'newApp' , pathMatch: 'full'},
      { path: 'newApp', loadChildren: './new-app/new-app.module#NewAppModule'},
    ]
  }
];
