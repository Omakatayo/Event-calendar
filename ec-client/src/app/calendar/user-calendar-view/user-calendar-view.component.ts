import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Calendar } from 'src/app/models/calendar.model';
import { EventItem } from 'src/app/models/event.model';
import { CalendarService } from 'src/app/services/calendar.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-user-calendar-view',
  templateUrl: './user-calendar-view.component.html',
  styleUrls: ['./user-calendar-view.component.css']
})
export class UserCalendarViewComponent implements OnInit {

  id!: number;
  cal!: Calendar;
  calendars!: Observable<Calendar[]>
  username!: string;
  event!: EventItem;
  events!: Observable<EventItem[]>
  arr = Array<any>();
  arr2 = Array<any>();

  constructor(private calendarService: CalendarService, private router: Router, 
              private route: ActivatedRoute, private eventService: EventService) {
   }

  ngOnInit() {
    this.reloadData();
  }

  async reloadData() {
    this.username = this.route.snapshot.params['username'];
    this.calendars = this.calendarService.getCalendarListByUsername(this.username);
  }

  async getEventById(id: number) {
    this.eventService.getEvent(id);
  }

}
