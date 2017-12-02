import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_item_url} from "../common/project";
import {Globals} from "../globals/globals";
import {ItemDef} from "../mv-definations";


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  providers:[Globals]
})
export class SearchItemComponent implements OnInit {
  items: ItemDef[]= [];
  constructor(private g:Globals,
              private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) { }

  ngOnInit() {
  }

  SearchItem(name, manufacturer, category, subcategory) {
    this._postService.POST(server_item_url, "/item/lookup_item", {
      "item": {
        "name": name,
        "manufacturer": manufacturer,
        "category": category,
        "sub_category": subcategory
      },
      "cookie" : ""
    }).subscribe( data =>{
      console.log("/item/lookup_item", data);
      if (data.code == 0) {
        if (data.response != 0) {
          this.items = data.response.items;
        }
        console.log("success", data)

      } else {
        this._dialogService.openAlert({title: 'Error logging in.', message: " msg : " + data.message});
      }
    });
  }

  WriteReview(a: ItemDef) {
    this._router.navigate(['../add-review'], {relativeTo:this._route, queryParams: a});
      console.log(a);
  }
  ReadReview(a: ItemDef){
    this._router.navigate(['../read-review'],{relativeTo:this._route, queryParams: a});
    console.log(a);
  }


}
