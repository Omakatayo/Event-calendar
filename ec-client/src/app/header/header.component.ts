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

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService, private router: Router) { }

  async ngOnInit() {
    if (await this.oktaAuth.isAuthenticated()) {
      this.username = (await this.oktaAuth.getUser()).given_name!;
      // console.log(this.username);
    }
  }


  async userDetails() {
    this.router.navigate(['user-details', this.username])
  }

}
