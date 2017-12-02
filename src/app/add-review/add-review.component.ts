import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_item_url} from "../common/project";
import {Globals} from "../globals/globals";
import {ItemDef} from "../mv-definations";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  item: ItemDef;
  private sub: any;
  constructor(private g:Globals,
              private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) {

  }

  ngOnInit() {
    this.sub = this._route.queryParams.subscribe(params => {
      console.log("paramInit", params)
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
