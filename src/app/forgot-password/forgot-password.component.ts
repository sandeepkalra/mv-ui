import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_auth_url} from "../common/project";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  ResetPassword(email, digitlock, new_password) {
    console.log("ResetPassword");
    this._postService.POST(server_auth_url, "/auth/reset_password",{
      "email": email,
      "new_password": new_password,
      "digit_lock": digitlock
    }).subscribe(data=>{
      console.log(data);
      if (data.code == 0) {
        this._router.navigate(['/0'])
      }
    })
  }
}
