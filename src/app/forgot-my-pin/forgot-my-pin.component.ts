import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";

@Component({
  selector: 'app-forgot-my-pin',
  templateUrl: './forgot-my-pin.component.html',
  styleUrls: ['./forgot-my-pin.component.scss']
})
export class ForgotMyPinComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  ResetPin(email, password, new_digit_lock) {
    console.log("ResetPin");
    this._postService.POST("/auth/reset_digit_lock",{
      "email":email,
      "password":password,
      "new_digit_lock":new_digit_lock
    }).subscribe(data=>{
      console.log(data);
      if (data.code == 0) {
        this._router.navigate(['/0'])
      }
    })
  }
}
