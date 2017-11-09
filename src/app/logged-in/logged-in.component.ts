import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals/globals';
import {Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import { TdDialogService, TdLoadingService } from '@covalent/core';
import {server_item_url} from "../common/project";

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
  providers:[Globals]
})
export class LoggedInComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private globals: Globals, private _postService:ServerConnectService,
  private _dialogService: TdDialogService) {
    this._postService.POST(server_item_url, "/item/lookup_list", {
        "cookie":"",
        "need_manufacturer_list": true,
        "need_category_list":true }).subscribe(
      data => {
        if (data.code == 0) {
            console.log(data.response)
        }  else {
          this._dialogService.openAlert({title: "Error loading", message: data.message})
        }

      })
  }

  ngOnInit() {
  }

}
