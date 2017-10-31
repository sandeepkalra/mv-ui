import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  TakeToForgotPinAndPassword() {
    console.log("TakeToForgotPinAndPassword")
  }
  ResetPassword() {
    console.log("ResetPassword")
  }
}
