import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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

  events!: EventItem[];
  today: Date = new Date();

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  async reloadData() {
    const searchType = localStorage.getItem('searchType')!;
    const searchString = localStorage.getItem('searchString')!;
    if(searchType) {
      this.events = await this.eventService.getEventByParameter(searchType, searchString);
      localStorage.removeItem('searchType');
      localStorage.removeItem('searchString');
    } else {
      this.events = await this.eventService.getEventListOpen();
    }
  }

  eventDetails(id: number) {
    this.router.navigate(['/event-details', id]);
  }

}