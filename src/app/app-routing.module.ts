import {NgModule, OnInit} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {HomeComponent} from "./components/home/home.component";
import {GameComponent} from "./components/game/game.component";
import {AccountPageComponent} from "./components/account-page/account-page.component";



//This is my case
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
