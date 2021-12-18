import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OktaAuth, UserClaims } from '@okta/okta-auth-js';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user!: User;
  tempUser!: UserClaims;
  id!: string;
  username!: string;
  email!: string;
  accountType!: string;

  constructor(private route: ActivatedRoute, private oktaAuth: OktaAuth, public authService: AuthService) {
    this.user = new User('', '', '', '');
  }

  async ngOnInit() {
    this.tempUser = await this.oktaAuth.getUser();
    this.id = this.tempUser.sub;

    this.username = localStorage.getItem('username')!;

    this.email = this.tempUser.preferred_username!;

    if (this.tempUser.groups[1] != null) {
      this.accountType = this.tempUser.groups[1];
    } else { this.accountType = this.tempUser.groups[0]; }

    this.user = new User(this.id, this.username, this.email, this.accountType);
  }

}
