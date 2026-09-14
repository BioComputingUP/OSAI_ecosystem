import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {provideHttpClient, withXhr} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {NavbarComponent} from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { AboutComponent } from './about/about.component';
import { AiEcosystemComponent } from './ai_ecosystem/ai_ecosystem.component';
import { PathwaysComponent } from './pathways/pathways.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    NotFoundPageComponent,
    NavbarComponent,
    NewsComponent,
    GuidelinesComponent,
    AboutComponent,
    AiEcosystemComponent,
    PathwaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // XHR backend: zone.js tracks it, so views update when data loads (the fetch default does not)
    provideHttpClient(withXhr())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
