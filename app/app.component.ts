import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from 'nativescript-angular/router';

import {LoadingComponent} from './loading/loading.component';
import {IndexComponent} from './index/index.component';
import {ArticleDetailComponent} from './article/article-detail.component';

@Component({
  selector: 'main',
  directives: [NS_ROUTER_DIRECTIVES, LoadingComponent],
  providers: [HTTP_PROVIDERS, NS_ROUTER_PROVIDERS],
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
@RouteConfig([
  {path: '/', name: 'Index', component: IndexComponent, useAsDefault: true},

//   {path: '/article/:category', name: 'ArticleList', component: ArticleListComponent},
  {path: '/article/:category/:url', name: 'ArticleDetail', component: ArticleDetailComponent},

//   {path: '/account/info/:user', name: 'UserInfo', component: UserInfoComponent},
//   {path: '/account/setting', name: 'UserSetting', component: UserSettingComponent},
//   {path: '/account/changePassword', name: 'ChangePassword', component: ChangePasswordComponent},
//   {path: '/account/resetPassword', name: 'ResetPassword', component: ResetPasswordComponent}, // admin

//   {path: '/self/links', name: 'FourthIndex', component: FourthIndexComponent},

  {path: '/*path', redirectTo: ['Index']}
])
export class AppComponent {
}
