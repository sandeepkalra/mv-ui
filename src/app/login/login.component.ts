import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hasError:boolean;
  constructor() {
    this.hasError = false
  }
  ProcessLoginForm() {
    console.log("ProcessLoginForm")
  }

  ngOnInit() {
  }

}
