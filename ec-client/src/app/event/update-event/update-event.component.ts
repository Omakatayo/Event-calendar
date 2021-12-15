import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { EventItem } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  event!: any;
  eventId!: number;
  categories: string[];
  address = new Address('', '', '', '');

  constructor(private eventService: EventService, private route: ActivatedRoute) {
    this.event = new EventItem(0, '', '', new Date(), '', new Date(), '', this.address, 0, 0, 0, '', '' ,'');
    this.categories = ['MEN_CIRCLES', 'MOVEMENT', 'SPIRITUAL']
   }

  async ngOnInit(): Promise<void> {
    this.eventId = this.route.snapshot.params['eventId'];
    console.log(this.eventId);


    this.eventService.getEvent(this.eventId)
      .subscribe(data => {
        console.log(data)
        this.event = data;
      }, error => console.log(error))

  }

  onSubmit(): void {
    this.eventService.updateEvent(this.eventId, this.event)
      .subscribe( data => {
        console.log(data);
        this.event = data;
      }, error => console.log(error))

  }
}
