import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {PropertiesComponent} from './components/properties/properties.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  }, {
    path: 'properties', component: PropertiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
