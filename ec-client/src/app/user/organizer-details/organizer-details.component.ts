import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-organizer-details',
  templateUrl: './organizer-details.component.html',
  styleUrls: ['./organizer-details.component.css']
})
export class OrganizerDetailsComponent implements OnInit {

  @Input() user!: User;
  @Input() username!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
