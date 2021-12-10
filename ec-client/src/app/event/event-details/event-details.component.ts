import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Address} from 'src/app/models/address.model';
import { EventItem } from 'src/app/models/event.model';

import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  id!: number;
  // address: Address = new Address("", "" ,"" ,"");
  event!: EventItem;
  

  constructor(private eventService: EventService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.eventService.getEvent(this.id)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error))
  }


}
