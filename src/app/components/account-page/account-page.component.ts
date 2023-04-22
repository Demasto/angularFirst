import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit{
  username: string = "";
    ngOnInit() {
      if(HeaderComponent.prototype.userName != null)
        this.username = HeaderComponent.prototype.userName;
    }
}
