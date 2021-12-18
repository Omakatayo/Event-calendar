import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Calendar } from 'src/app/models/calendar.model';
import { EventItem } from 'src/app/models/event.model';
import { CalendarService } from 'src/app/services/calendar.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-user-calendar-details',
  templateUrl: './user-calendar-details.component.html',
  styleUrls: ['./user-calendar-details.component.css']
})
export class UserCalendarDetailsComponent implements OnInit {

  @Input() username!: string;
  @Input() idNameArray = Array<any>();
  @Input() calendars!: Calendar[];
  @Input() calendar!: Calendar;
  @Input() eventItem!: EventItem;


  constructor(private calendarService: CalendarService, private router: Router, 
              private route: ActivatedRoute, private eventService: EventService) {
                
   }

  ngOnInit() {
    console.log(this.eventItem)
  }

  async deleteEvent(calendarId: number, eventId: number) {
    await this.calendarService.removeEventFromCalendar(calendarId, eventId, {})
  }

  log(event: number) {
    console.log(event)
  }

}

interface obj {
  id : number
 name:string
 }
