import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  async reloadData(): Promise<void> {
    this.users = await this.userService.getUsers();
    console.log(this.users);
  }
}
