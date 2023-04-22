import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import {AppRoutingModule} from "./app-routing.module";

import {RouterLink, RouterLinkActive} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { AccountPageComponent } from './components/account-page/account-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    HeaderComponent,
    CardComponent,
    LoginPageComponent,
    HomeComponent,
    GameComponent,
    AccountPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
