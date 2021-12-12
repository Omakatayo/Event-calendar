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
  arr = Array<any>();
  arr2 = Array<any>();
  arr3 = Array<any>();
  eventName!: any;

  constructor(private calendarService: CalendarService, private router: Router, 
              private route: ActivatedRoute, private eventService: EventService) {
   }

  ngOnInit() {
    this.reloadData();
  }

  async reloadData() {
    this.username = this.route.snapshot.params['username'];
    this.calendars = await this.calendarService.getCalendarListByUsername(this.username);

    this.calendars.forEach( (element) => {
      this.arr.push(element.eventId);
    })
   
      JSON.stringify(this.arr, (key, value) => {
        if (key && !isNaN(value)) this.arr2.push(value);
        return value;
      });
      this.arr2 = [...new Set(this.arr2)]
      console.log(this.arr2)

      this.arr2.forEach( async (key, value) => {
        var obj = [];
        
        obj[value] = await this.getEventNameById(key);
        // this.arr3.push(obj)
      })
      // console.log("Array 3: ", this.arr3);
  }

  async getEventNameById(id: any): Promise<void> {
    var obj:obj = {
      id: 0,
      name: ''
    };
    this.eventName = await this.eventService.getEventNameById(id);
    obj.id = id;
    obj.name = this.eventName;
    // this.arr3.push(obj);
    this.arr3[id] = this.eventName
    console.log(this.arr3);    
    }

}

interface obj {
  id : number
 name:string
 }
 