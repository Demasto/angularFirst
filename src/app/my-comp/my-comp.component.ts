import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {
  @Input()
  formText: any = {
    login: '',
    password: ''
  }
}
