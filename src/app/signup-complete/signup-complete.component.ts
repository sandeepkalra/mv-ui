import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_auth_url} from "../common/project";

@Component({
  selector: 'app-signup-complete',
  templateUrl: './signup-complete.component.html',
  styleUrls: ['./signup-complete.component.scss']
})
export class SignupCompleteComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  ProcessSignupCompleteForm(email:string, token:string) {
    this._postService.POST(server_auth_url, '/auth/validate_token',
      {email: email,
        token: token
      })
      .subscribe(data => {
        console.log(data);
        if (data.code == 0) {
          this._router.navigate(['/1']);
        }
        else {
          this._dialogService.openAlert({title: 'Error singup Complete.', message: " msg : " + data.message});
        }
      })
  }
}
