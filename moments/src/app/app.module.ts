import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagensComponent } from './components/messagens/messagens.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { PagesComponent } from './components/pages/pages.component';
import { CommentComponent } from './services/comment/comment.component';
import { MessagesComponent } from './services/messages/messages.component';
import { MomentComponent } from './services/moment/moment.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MessagensComponent,
    MomentFormComponent,
    PagesComponent,
    CommentComponent,
    MessagesComponent,
    MomentComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
