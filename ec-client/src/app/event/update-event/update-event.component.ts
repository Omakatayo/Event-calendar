import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  registerForm: FormGroup;
  address: FormGroup;
  eventName: FormControl;
  description: FormControl;
  startDate: FormControl;
  startTime: FormControl;
  endDate: FormControl;
  endTime: FormControl;
  street: FormControl;
  postalCode: FormControl;
  city: FormControl;
  country: FormControl;
  availability: FormControl;
  price: FormControl;
  category: FormControl;
  organizer: FormControl;
  imageURL: FormControl;
  categories: string[];
  event!: any;
  eventId!: number;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
    this.categories = ['MEN_CIRCLES', 'MOVEMENT', 'SPIRITUAL']
    this.eventName = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.startDate = new FormControl('', [Validators.required]);
    this.startTime = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.endTime = new FormControl('', [Validators.required]);
    this.street = new FormControl('', [Validators.required]);
    this.postalCode = new FormControl('', [Validators.required]);
    this.city = new FormControl('', [Validators.required]);
    this.country = new FormControl('', [Validators.required]);
    this.availability = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);
    this.organizer = new FormControl('', [Validators.required]);
    this.imageURL = new FormControl('', [Validators.required]);

    this.address = new FormGroup({
      street: this.street,
      postalCode: this.postalCode,
      city: this.city,
      country: this.country
    })
    
    this.registerForm = new FormGroup({
      eventName: this.eventName,
      description: this.description,
      startDate: this.startDate,
      startTime: this.startTime,
      endDate: this.endDate,
      endTime: this.endTime,
      address: this.address,
      availability: this.availability,
      price: this.price,
      category: this.category,
      organizer: this.organizer,
      imageURL: this.imageURL
    })
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
    console.log("Creating Event");
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    console.log(this.eventName.value);
    this.eventService.updateEvent(1, this.registerForm.value)
      .subscribe( data => {
        console.log(data);
        this.event = data;
      })
  }
}
