import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  hasError:boolean;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) {
    this.hasError = false
  }

  ngOnInit() {
  }

  Logout() {
    this._postService.POST("/auth/logout",{}).subscribe(data=>{
      console.log(data);
      if (data.code == 0) {
        this._router.navigate(['/0'])
      }
    })

  }
}
