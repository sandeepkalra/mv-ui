import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { MOCK_API } from '../config/api.config';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {
  CovalentChipsModule, CovalentDialogsModule, CovalentLayoutModule, CovalentLoadingModule, CovalentMenuModule,
  CovalentNotificationsModule,
  CovalentSearchModule, CovalentStepsModule
} from '@covalent/core';

import { routedComponents, AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { USER_PROVIDER, USERS_API } from './users';
import { ForgotMyPinComponent } from './forgot-my-pin/forgot-my-pin.component';
import { NotLoggedInYetComponent } from './not-logged-in-yet/not-logged-in-yet.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LogoutComponent } from './logout/logout.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SearchVoicesComponent } from './search-voices/search-voices.component';
import { RegisterMyVoiceComponent } from './register-my-voice/register-my-voice.component';
import { RegisterMyItemComponent } from './register-my-item/register-my-item.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

export function getAPI(): string {
  return MOCK_API;
}

@NgModule({
  declarations: [
    AppComponent,
    // MatAutocompleteModule,
    routedComponents,
    ForgotMyPinComponent,
    NotLoggedInYetComponent,
    LoggedInComponent,
    LogoutComponent,
    TermsAndConditionsComponent,
    FaqsComponent,
    SearchVoicesComponent,
    RegisterMyVoiceComponent,
    RegisterMyItemComponent,
    ManageItemsComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentChipsModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentSearchModule,
    CovalentDialogsModule,
    CovalentLayoutModule,
    CovalentLoadingModule,
    CovalentMenuModule,
    CovalentStepsModule,
    CovalentNotificationsModule
  ], // modules needed to run this module
  providers: [
    httpInterceptorProviders,
    Title, {
      provide: USERS_API, useFactory: getAPI,
    }, USER_PROVIDER,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
