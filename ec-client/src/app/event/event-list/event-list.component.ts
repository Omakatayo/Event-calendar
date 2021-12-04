import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventItem } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<EventItem[]> | undefined;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getEventList();
  }

}
