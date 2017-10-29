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

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  ItemsComponent
];
