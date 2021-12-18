import { Component, OnInit } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth, UserClaims } from '@okta/okta-auth-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string;
  user!: UserClaims;

  constructor(public oktaAuth: OktaAuth, public authService: OktaAuthStateService) {
  }

  async ngOnInit() {
    if(await this.oktaAuth.isAuthenticated()) {
      this.user = await this.oktaAuth.getUser();
      const role1 = this.user.groups[1]!;
      const role2 = this.user.groups[2]!;
      if(role1 != null) {
        localStorage.setItem(role1, role1);
      }
      if(role2 != null) {
        localStorage.setItem(role2, role2);
      }

      this.username = await this.user.user_name;
      // this.username = (await this.oktaAuth.getUser()).given_name!;
      if(localStorage.getItem('username') != 'null') {
        localStorage.setItem('username', this.username);
      }
    }
    
  }
}
