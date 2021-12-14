import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserCalendarViewComponent } from './calendar/user-calendar-view/user-calendar-view.component';
import { HeaderComponent } from './header/header.component';
import { MyAccountComponent } from './user/my-account/my-account.component';
import { OrganizerDetailsComponent } from './user/organizer-details/organizer-details.component';
import { AdminDetailsComponent } from './user/admin-details/admin-details.component';

const oktaConfig = {
  issuer: 'https://dev-46503723.okta.com/oauth2/default',
  clientId: '0oa2xs8mqgUwmJyyF5d7',
  redirectUri: '/callback',
  scopes: ['openid', 'profile']
};

const oktaAuth = new OktaAuth(oktaConfig);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: OktaCallbackComponent
  },
  { path: 'event-details/:eventId', 
    component: EventDetailsComponent 
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'my-account/:username',
    component: MyAccountComponent
  },
  {
    path: 'user-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: UserDetailsComponent }
    ]
  },
  {
    path: 'organizer-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: OrganizerDetailsComponent }
    ]
  },
  {
    path: 'admin-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: AdminDetailsComponent }
    ]
  },
  {
    path: 'my-calendars/:username',
    component: UserCalendarViewComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    EventListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
