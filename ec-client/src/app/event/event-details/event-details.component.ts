import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Observable } from 'rxjs';
import { Address} from 'src/app/models/address.model';
import { Calendar } from 'src/app/models/calendar.model';
import { EventItem } from 'src/app/models/event.model';
import { RegisterItem } from 'src/app/models/register-item.model';
import { Register } from 'src/app/models/register.model';
import { CalendarService } from 'src/app/services/calendar.service';

import { EventService } from 'src/app/services/event.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventId!: number;
  event!: EventItem;
  calendar!: any;
  calendarDTO!: any;
  eventIdList!: number[];
  calendars!: Calendar[];
  username!: string;
  register!: RegisterItem;
  users!: string[];
  compare: boolean = false;
  address = new Address('', '', '', '');

  constructor(private eventService: EventService, private route: ActivatedRoute, 
              private calendarService: CalendarService, private registerService: RegisterService,
              public oktaAuth: OktaAuth, public authService: OktaAuthStateService) {
    this.event = new EventItem(0, '', '', new Date(), '', new Date(), '', this.address, 0, 0, 0, '', '' ,'');
  }

  async ngOnInit(): Promise<void> {
    this.eventId = this.route.snapshot.params['eventId'];
    this.username = localStorage.getItem('username')!;
    this.users = await this.registerService.getUsersRegisteredToEvent(this.eventId);
    this.compare = Boolean(Number(this.users.indexOf(this.username)));

    this.eventService.getEvent(this.eventId)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error))

      this.register = {
        eventId: this.eventId,
        username: this.username
      }

  }

  async displayCalendarList():Promise<void> {
    this.calendars = await this.calendarService.getCalendarListByUsername(this.username);
    document.getElementById("calendar-list")!.style.display = "block";
  }

   async addToCalendar(calendarId: number) {
    await this.calendarService.addEventToCalendar(calendarId, this.eventId, {});
  }

  async registerToEvent():Promise<void> {   
    await this.registerService.register(this.register)
    
    await this.eventService.registerToEvent(this.eventId, this.event);

    this.ngOnInit();
  }

  async unregisterFromEvent():Promise<void> {
    await this.registerService.unregister(this.eventId, this.username);

    await this.eventService.unregisterFromEvent(this.eventId, this.event);

    this.ngOnInit();
  }

}
