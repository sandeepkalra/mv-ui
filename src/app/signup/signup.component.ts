import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TdDialogService, TdLoadingService } from '@covalent/core';

import 'rxjs/add/operator/toPromise';
import {ServerConnectService} from "../server-connect-service/server-connect.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _dialogService: TdDialogService,
              private _loadingService: TdLoadingService,
              private _postService:ServerConnectService) {
  }

  ngOnInit() {
  }

  ProcessSignupForm(emailElement, passElement,
                    digitElement, DOBElement,
                    firstNameElement, lastNameElement,
                    termsElement) {

    if (termsElement == false) {
      this._dialogService.openPrompt({message: "Please accept the terms to proceed."})
    } else {
      this._postService.POST('/auth/signup',
          {email: emailElement,
            password: passElement,
            date_of_birth: new Date(DOBElement),
            first_name: firstNameElement,
            last_name: lastNameElement,
            four_digit_lock: parseInt(digitElement),
            is_blocked: !termsElement
          })
        .subscribe(data => {
          console.log(data);
          if (data.code == 0) {
            this._router.navigate(['/1']);
          }
          else {
            this._dialogService.openAlert({title: 'Error singup.', message: " msg : " + data.message});
          }
        })
    }
  }

}
