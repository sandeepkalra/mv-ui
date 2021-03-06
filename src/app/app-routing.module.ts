import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SignupComponent} from "./signup/signup.component";
import {SignupCompleteComponent} from "./signup-complete/signup-complete.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ForgotMyPinComponent} from "./forgot-my-pin/forgot-my-pin.component";
import {NotLoggedInYetComponent} from "./not-logged-in-yet/not-logged-in-yet.component";
import {LoggedInComponent} from "./logged-in/logged-in.component";
import {LogoutComponent} from "./logout/logout.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {ManageItemsComponent} from "./manage-items/manage-items.component";
import {RegisterMyItemComponent} from "./register-my-item/register-my-item.component";
import {RegisterMyVoiceComponent} from "./register-my-voice/register-my-voice.component";
import {UsersComponent} from "./users/users.component";
import {ForgotPasswordAndPinComponent} from "./forgot-password-and-pin/forgot-password-and-pin.component";
import { ChangeOldPasswordComponent } from './change-old-password/change-old-password.component';
import { ChangeOldPinComponent } from './change-old-pin/change-old-pin.component';
import {SearchItemComponent} from './search-item/search-item.component'
import {AddReviewComponent} from "./add-review/add-review.component";
import {ReadReviewComponent} from "./read-review/read-review.component";

const routes: Routes = [
  {
    path: '0',
    component: NotLoggedInYetComponent,
    children: [
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent},
      { path: 'forgot-my-pin', component: ForgotMyPinComponent},
      { path: 'forgot-password-and-pin', component:ForgotPasswordAndPinComponent},
      { path: '', redirectTo: 'login', pathMatch:'full' }
  ]},
  {
    path: '1',
    component: LoggedInComponent,
    children: [
      { path: 'home', component: MainComponent},
      { path: 'my-dashboard', component:DashboardComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'search-item', component: SearchItemComponent },
      { path: 'add-my-voice' , component: RegisterMyVoiceComponent},
      { path: 'add-items' , component: RegisterMyItemComponent},
      { path: 'manage-items' , component: ManageItemsComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'change-old-password', component: ChangeOldPasswordComponent},
      { path: 'change-old-pin', component: ChangeOldPinComponent},
      { path: 'add-review', component: AddReviewComponent},
      { path: 'read-review', component: ReadReviewComponent},
      { path: '', redirectTo: 'home', pathMatch:'full'}

  ]},
  {
    path:'signup-complete', component:SignupCompleteComponent
  },
  {
    path:'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path:'faqs',
    component:FaqsComponent
  },
  {
    path:'', component: UsersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
  MainComponent,
  SignupComponent,
  UsersComponent,
  SignupCompleteComponent,
  ForgotPasswordAndPinComponent,
  ForgotPasswordComponent,
  ChangeOldPasswordComponent,
  ChangeOldPinComponent,
  NotLoggedInYetComponent,
  ManageItemsComponent,
  RegisterMyItemComponent,
  RegisterMyVoiceComponent,
  FaqsComponent,
  TermsAndConditionsComponent,
  LoggedInComponent,
  LogoutComponent,
  ForgotMyPinComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  SearchItemComponent,
  AddReviewComponent,
  ReadReviewComponent,
];
