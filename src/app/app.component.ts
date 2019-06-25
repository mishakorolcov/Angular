import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  developer = {
    emailHelp: '',
    password: ''
  };

  developerRegister = {
    name: '',
    number: '',
    email: '',
    pass: ''
  };

  sendForm() {
    console.log(this.developer);
  }

  sendFormTwo() {
    console.log(this.developerRegister);
  }

}

