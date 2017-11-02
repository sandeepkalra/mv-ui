import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password-and-pin',
  templateUrl: './forgot-password-and-pin.component.html',
  styleUrls: ['./forgot-password-and-pin.component.scss']
})
export class ForgotPasswordAndPinComponent implements OnInit {

  constructor() { }
  ForgotPasswordAndPin() {
    console.log("ForgotPasswordAndPin")
  }
  ngOnInit() {
  }

}
