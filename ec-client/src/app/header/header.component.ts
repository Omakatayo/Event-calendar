import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = '';

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    localStorage.clear();
    this.oktaAuth.signInWithRedirect();
  }

  logout() {
    localStorage.clear();
    this.oktaAuth.signOut()
  }

  myAccount() {
    this.username = localStorage.getItem('username')!;
    this.router.navigate(['my-account', this.username])
  }

  myCalendars() {
    this.username = localStorage.getItem('username')!;
    this.router.navigate(['my-calendars', this.username])
  }
}
