import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  pseudo:string;
  email:string;
  mdp:string;
  tab = [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users) => this.tab = users);
  }

}
