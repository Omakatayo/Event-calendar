import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.css']
})
export class EventManagementComponent implements OnInit {

  tab1: any;
  tab2: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeCheck = this.route.snapshot.url[0].path;

    if (routeCheck === 'update-event') {
      let radiobtn = document.getElementById('tab2')!;
      radiobtn.setAttribute("checked", "");
    }
    else if (routeCheck === 'new-event') {
      let radiobtn = document.getElementById('tab1')!;
      radiobtn.setAttribute("checked", "");
    }
  }

}
