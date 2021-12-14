import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  user: User = new User(0, '', '', '', '', '');
  username!: string;

  constructor(private userService: UserService, 
              private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit() {
 
    this.username = this.route.snapshot.params['username'];

    this.userService.getUser(this.username)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error))
  }

}
