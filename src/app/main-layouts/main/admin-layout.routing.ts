import {Routes} from "@angular/router";
import {HomeComponent} from '../../components/home/home.component';
import {PropertiesComponent} from '../../components/properties/properties.component';
import {AgentsComponent} from '../../components/agents/agents.component';
import {AboutComponent} from '../../components/about/about.component';
import {NewsListComponent} from '../../components/news-list/news-list.component';
import {ContactComponent} from '../../components/contact/contact.component';
import {PropertyComponent} from '../../components/property/property.component';

export const AdminLayoutRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'agent', component: AgentsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news-list', component: NewsListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'property', component: PropertyComponent},
];
