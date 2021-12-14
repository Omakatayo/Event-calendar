import { Component, Input, OnInit } from '@angular/core';
import { EventItem } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-organizer-details',
  templateUrl: './organizer-details.component.html',
  styleUrls: ['./organizer-details.component.css']
})
export class OrganizerDetailsComponent implements OnInit {

  @Input() user!: User;
  @Input() username!: string;
  
  events!: EventItem[];

  constructor(private eventService: EventService) { }

  async ngOnInit(): Promise<void> {
    this.events = await this.eventService.getEventListByOrganizer(this.username);
  }

}
