import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
@Component({
  selector: 'app-change-old-pin',
  templateUrl: './change-old-pin.component.html',
  styleUrls: ['./change-old-pin.component.scss']
})
export class ChangeOldPinComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  ChangeOldPin(email, old_digit_lock, new_digit_lock) {
    this._postService.POST("/auth/change_old_digit_lock",{
      "email":email,
      "old_digit_lock":old_digit_lock,
      "new_digit_lock": new_digit_lock
    }).subscribe(data=>{
      console.log(data);
      if (data.code == 0) {
        this._router.navigate(['/0'])
      }
    })
  }

}
