import {Component, ViewRef} from '@angular/core';
import {Routes} from "@angular/router";
import { LoginPageComponent} from "../login-page/login-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = "";

  AddProfileName(loginForm: any) {
    const logForm = document.getElementById('logout')
    if(logForm != null)
      logForm.style.display = 'none';
    const logForm2 = document.getElementById('login')
    const user = document.getElementById('user')
    if(logForm2 != null && user != null) {
      user.innerText += `${loginForm.username}`
      this.userName = loginForm.username;
      logForm2.style.display = 'block';
    }
  }

}
