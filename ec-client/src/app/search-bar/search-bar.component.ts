import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchType:string;
  searchString:string;

  constructor(private router: Router, private eventService: EventService) {
    this.searchString = "";
    this.searchType = "";
   }

  ngOnInit(): void {
    console.log(this.searchType)
  }

  search() {
    localStorage.setItem('searchType', this.searchType);
    localStorage.setItem('searchString', this.searchString);
    this.router.navigate(['/']);
    // this.eventService.getEventByParameter(this.searchType, this.searchString);
  }

}
