import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {PropertiesComponent} from './components/properties/properties.component';
import {AdminLayoutComponent} from './main-layouts/main/admin-layout.component';


const routes: Routes = [
  {
    path: '', component:  AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './main-layouts/main/routing.module#RoutingModule'
      }
    ],
  }, {
    path: 'properties', component: PropertiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
