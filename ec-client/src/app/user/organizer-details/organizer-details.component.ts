import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { EventItem } from 'src/app/models/event.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-organizer-details',
  templateUrl: './organizer-details.component.html',
  styleUrls: ['./organizer-details.component.css']
})
export class OrganizerDetailsComponent implements OnInit {

  @Input() user!: User;
  username!: string;
  
  events!: EventItem[];
  admins!: any;

  constructor(private eventService: EventService, public authService: AuthService, private oktaAuth: OktaAuth, 
              private router: Router){ }

  async ngOnInit(): Promise<void> {
    this.reloadData();
  }

  async reloadData() {
    this.username = localStorage.getItem('username')!;
    this.events = await this.eventService.getEventListByOrganizer(this.username);
  }

  updateEvent(eventId: number) {
    this.router.navigate(['/update-event', eventId]);
    // let radiobtn = document.getElementById('em-tab2')!;
    // radiobtn.setAttribute("checked", "checked");
    // let radiobtn = document.getElementById('em-tab2');
    // console.log(radiobtn)
    // if(radiobtn) (radiobtn as HTMLFormElement).checked = true;
  //   const radiobtn = <HTMLFormElement>document.getElementById('em-tab2')
  // if(radiobtn ) radiobtn.setAttribute("checked", "checked");
  }

  deleteEvent(eventId: number) {
    this.eventService.deleteEvent(eventId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
