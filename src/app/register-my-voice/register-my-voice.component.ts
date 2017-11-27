import { Component, OnInit } from '@angular/core';
import {Globals} from "../globals/globals";

@Component({
  selector: 'app-register-my-voice',
  templateUrl: './register-my-voice.component.html',
  styleUrls: ['./register-my-voice.component.scss'],
  providers:[Globals]
})
export class RegisterMyVoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
