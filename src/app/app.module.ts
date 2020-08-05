import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PropertiesComponent} from './components/properties/properties.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminLayoutComponent} from './main-layouts/main/admin-layout.component';
import {HeaderComponent} from './main-layouts/header/header.component';
import {FooterComponent} from './main-layouts/footer/footer.component';
import {DemoMaterialModule} from './material-module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {RoutingModule} from './main-layouts/main/routing.module';
import { AboutComponent } from './components/about/about.component';
import { AgentsComponent } from './components/agents/agents.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { PropertyComponent } from './components/property/property.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminLayoutComponent,
    FooterComponent,
    AboutComponent,
    AgentsComponent,
    NewsListComponent,
    NewsDetailComponent,
    ContactComponent,
    PropertyComponent
  ],
  imports: [
    DemoMaterialModule,
    HttpClientModule,
    RoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}