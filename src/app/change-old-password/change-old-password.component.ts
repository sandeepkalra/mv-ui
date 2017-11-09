import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_auth_url} from "../common/project";

@Component({
  selector: 'app-change-old-password',
  templateUrl: './change-old-password.component.html',
  styleUrls: ['./change-old-password.component.scss']
})
export class ChangeOldPasswordComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  ChangeOldPassword(email, old_password, new_password) {
    this._postService.POST(server_auth_url, "/auth/change_old_password",{
      "email":email,
      "old_password": old_password,
      "new_password":new_password
    }).subscribe(data=>{
      console.log(data);
      if (data.code == 0) {
        this._router.navigate(['/0'])
      }
    })
  }

}
