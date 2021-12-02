import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { UpdateEventComponent } from './event/update-event/update-event.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { CalendarViewComponent } from './calendar/calendar-view/calendar-view.component';
import { UserCalendarViewComponent } from './calendar/user-calendar-view/user-calendar-view.component';
import { EventUserListComponent } from './event/event-user-list/event-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FooterComponent,
    HeaderComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    CalendarViewComponent,
    UserCalendarViewComponent,
    EventUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }