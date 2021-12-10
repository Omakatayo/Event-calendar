import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Calendar } from 'src/app/models/calendar.model';
import { CalendarService } from 'src/app/services/calendar.service';

@Component({
  selector: 'app-user-calendar-view',
  templateUrl: './user-calendar-view.component.html',
  styleUrls: ['./user-calendar-view.component.css']
})
export class UserCalendarViewComponent implements OnInit {

  cal!: Calendar;
  calendars!: Observable<Calendar[]>
  username!: string;

  constructor(private calendarService: CalendarService, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.username = this.route.snapshot.params['username'];
    this.calendars = this.calendarService.getCalendarListByUsername(this.username);
    
    this.calendarService.getCalendar(3)
      .subscribe(data => {
        console.log(data)
        this.cal = data;
      }, error => console.log(error))

  }

}
