import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
import {server_auth_url} from "../common/project";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hasError:boolean;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) {
    this.hasError = false
  }

  ProcessLoginForm(emailElement, passElement) {
    // this._dialogService.openAlert({message:"Welcome My lord!", title: "Logging in."});
    try {
      this._loadingService.register('user.form');
      console.log("ProcessLoginForm", emailElement, passElement);
    } catch (error) {
      this._dialogService.openAlert({message: 'There was an error loading the user'});
    } finally {
      this._loadingService.resolve('user.form');
    }
    // this._dialogService.openPrompt( {message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.', disableClose: true})


    this._postService.POST(server_auth_url, '/auth/login',{email:emailElement, password:passElement})
      .subscribe(data=>{
        console.log(data);
        if (data.code == 0) { this._router.navigate(['/1']); }
        else  { this._dialogService.openAlert({title: 'Error logging in.', message: " msg : " + data.message});
        }
      })
  }

  ngOnInit() {
  }

}
