import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ItemsComponent} from "./items/items.component";
import {SignupComponent} from "./signup/signup.component";
import {SignupCompleteComponent} from "./signup-complete/signup-complete.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ForgotMyPinComponent} from "./forgot-my-pin/forgot-my-pin.component";
import {NotLoggedInYetComponent} from "./not-logged-in-yet/not-logged-in-yet.component";
import {LoggedInComponent} from "./logged-in/logged-in.component";
import {LogoutComponent} from "./logout/logout.component";
import {TermsAndConditionsComponent} from "./terms-and-conditions/terms-and-conditions.component";
import {FaqsComponent} from "./faqs/faqs.component";

const routes: Routes = [
  {
    path: '0',
    component: NotLoggedInYetComponent,
    children: [
      { path: 'signup', component: SignupComponent},
      { path: 'login', component: LoginComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent},
      { path:'forgot-my-pin', component: ForgotMyPinComponent},
      { path: '', redirectTo: 'login', pathMatch:'full' }
  ]},
  {
    path: '1',
    component: LoggedInComponent,
    children: [
      { path: 'logout', component: LogoutComponent},
      { path: '', redirectTo: 'login', pathMatch:'full' },
  ]},
  {
    path:'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path:'faqs',
    component:FaqsComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        component: DashboardComponent,
        path: '',
      }
      ]
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
  SignupCompleteComponent,
  ForgotPasswordComponent,
  NotLoggedInYetComponent,
  FaqsComponent,
  TermsAndConditionsComponent,
  LoggedInComponent,
  LogoutComponent,
  ForgotMyPinComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  ItemsComponent
];
