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

  calendars!: Calendar[];
  username!: string;
  tempArray = Array<any>();
  tempArray2 = Array<any>();
  idNameArray = Array<any>();
  eventName!: any;

  constructor(private calendarService: CalendarService, private router: Router, 
              private route: ActivatedRoute, private eventService: EventService) {
   }

  async ngOnInit() {
    await this.reloadData();
  }

  async reloadData() {
    this.username = this.route.snapshot.params['username'];
    this.calendars = await this.calendarService.getCalendarListByUsername(this.username);
    this.calendars.forEach( (element) => {
      this.tempArray.push(element.eventId);
    })
    
   
    JSON.stringify(this.tempArray, (key, value) => {
      if (key && !isNaN(value)) this.tempArray2.push(value);
      return value;
    });
    this.tempArray2 = [...new Set(this.tempArray2)]

    this.tempArray2.forEach( async (key, value) => {
      if(key > 0) {
        var obj = [];   
        obj[value] = await this.getEventNameById(key);
      }
    })
  }

  async getEventNameById(id: any): Promise<void> {
    var obj:obj = {
      id: 0,
      name: ''
    };
    this.eventName = await this.eventService.getEventNameById(id);
    obj.id = id;
    obj.name = this.eventName;
    this.idNameArray[id] = this.eventName  
  }

  async deleteEvent(calendarId: number, eventId: number) {
    await this.calendarService.removeEventFromCalendar(calendarId, eventId, {})
    this.reloadData();
  }

}

interface obj {
  id : number
 name:string
 }
 