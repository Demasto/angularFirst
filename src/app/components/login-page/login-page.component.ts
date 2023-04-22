import {Component, OnInit, Output, OnChanges} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {Router, RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit() { }

  redirectToAccount(){
    this.router.navigate(['account']);
  }

  loginForm: any = {
    username: '',
    password: ''
  }

  login(username: string, password: string) {
    if (username === "" || password === ""){
      alert("Нельзя оставлять поля пустым!")
    }
    else {
      this.loginForm.username = username;
      this.loginForm.password = password;

      HeaderComponent.prototype.AddProfileName(this.loginForm)
      this.redirectToAccount()
    }

  }
}
