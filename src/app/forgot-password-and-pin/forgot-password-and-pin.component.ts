import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
@Component({
  selector: 'app-forgot-password-and-pin',
  templateUrl: './forgot-password-and-pin.component.html',
  styleUrls: ['./forgot-password-and-pin.component.scss']
})
export class ForgotPasswordAndPinComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }
  ForgotPasswordAndPin() {
    console.log("ForgotPasswordAndPin");
    this._dialogService.openAlert({message:"Sorry! The admin has decided to not support " +
    "this operation at the moment. You can directly contact them to reset your pin and/or password",
      title:"Operation not supported yet!"})
  }
  ngOnInit() {
  }

}
