import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string;

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService) {
  }

  async ngOnInit() {
    if(await this.oktaAuth.isAuthenticated()) {
      this.username = (await this.oktaAuth.getUser()).given_name!;
      if(localStorage.getItem('username') != 'null') {
        localStorage.setItem('username', this.username);
      }
    }
  }
}
