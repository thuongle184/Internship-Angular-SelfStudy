import { Component, OnInit } from '@angular/core';
import {usersAcc, user} from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  
  index = 0;
 
  selectedUser: user;
  onSelect(userAccount: user): void {
    this.selectedUser = userAccount;
    
  }

  deleteItem(index:number) {
    usersAcc.splice(index, 1);
  }

  users = usersAcc;

 
}


