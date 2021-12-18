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
import { MyAccountComponent } from './user/my-account/my-account.component';
import { OrganizerDetailsComponent } from './user/organizer-details/organizer-details.component';
import { AdminDetailsComponent } from './user/admin-details/admin-details.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { EventManagementComponent } from './event/event-management/event-management.component';
import { OktaAuthGuard, OktaAuthGuardAdmin, OktaAuthGuardAdminOrganizer } from './app.guard';

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
  {
    path: 'event-management',
    component: EventManagementComponent,
    canActivate: [OktaAuthGuardAdminOrganizer]
  },
  { path: 'new-event', 
    component: EventManagementComponent,
    children: [
      { path: '', component: CreateEventComponent }
    ],
    canActivate: [OktaAuthGuardAdminOrganizer]
  },
  { path: 'update-event/:eventId', 
    component: EventManagementComponent,
    children: [
      { path: '', component: UpdateEventComponent }
    ],
    canActivate: [OktaAuthGuardAdminOrganizer]
  },
  { path: 'event-details/:eventId', 
    component: EventDetailsComponent 
  },
  {
    path: 'my-account/:username',
    component: MyAccountComponent,
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'user-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: UserDetailsComponent }
    ],
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'organizer-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: OrganizerDetailsComponent }
    ],
    canActivate: [OktaAuthGuardAdminOrganizer]
  },
  {
    path: 'admin-details/:username',
    component: MyAccountComponent,
    children: [
      { path: '', component: AdminDetailsComponent }
    ],
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'users',
    component: AdminDetailsComponent,
    children: [
      { path: '', component: UserListComponent }
    ],
    canActivate: [OktaAuthGuardAdmin]
  },
  {
    path: 'my-calendars/:username',
    component: UserCalendarViewComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    EventListComponent
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
