import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_auth_url, server_item_url} from "../common/project";
import {Globals} from "../globals/globals";

@Component({
  selector: 'app-register-my-item',
  templateUrl: './register-my-item.component.html',
  styleUrls: ['./register-my-item.component.scss'],
  providers:[Globals]
})
export class RegisterMyItemComponent implements OnInit {
  category = '';
  itemName = '';
  disabled: boolean = false;

  constructor(private g:Globals,
              private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) {

    this.manufacturers.concat(this.g.manufacturer_list);
    this.categories.concat(this.g.categories);
    console.log("manufacturers", this.manufacturers);
    console.log("categories", this.categories);
  }

  manufacturers : string[] = [
    'Apple',
    'Microsoft',
    'Google',
    'Facebook',
    'ATT',
    'Sprint',
    'T-Mobile',
    'Yahoo',
    'Citibank',
    'Bank Of America'
  ];

  categories : string[] = [
    'Bank',
    'Software Company',
    'Software',
    'Builder',
    'Building',
    'Country',
    'Website',
    'Services'
  ];


  ngOnInit(): void {
  }

  RegisterItem(item, manufacturer, c, subc){
    // 1st . Search manufacturer, category in globals, add this to list
    if (this.manufacturers.find(e => e.toUpperCase() == manufacturer.toUpperCase()) == null) {
      this.manufacturers.concat(manufacturer);
    } else {
      console.log("manufactured existed", manufacturer)
    }

    if (this.categories.find(e => e.toUpperCase() == c.toUpperCase()) == null) {
      this.categories.concat(c);
    } else {
      console.log("category existed", c)
    }

    // 2nd . Notify Server.
    this._postService.POST(server_item_url, "/item/add_item", {
        "item": {
          "name": item,
          "manufacturer": manufacturer,
          "category": c,
          "sub_category": subc
        },
        "cookie" : ""
    }).subscribe( data =>{
      console.log("/item/add_item", data);
      if (data.code == 0) {
        this.g.manufacturer_list = this.manufacturers;
        this.g.categories = this.categories;
      } else {
        this._dialogService.openAlert({title: 'Error logging in.', message: " msg : " + data.message});
      }
      });
  }
  manufacturerNameModel = '';
  categoryNameModel= '';
  subcategoryNameModel= '';

}
