import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title:string = 'Dating App';
  constructor( private accountservice: AccountService){}

  ngOnInit(): void {
      this.setCurrentUser();
  }

  
  setCurrentUser(){
    const userstring = localStorage.getItem('user');
    if (!userstring) return;    
    const user: User = JSON.parse(userstring);
    this.accountservice.SetCurrentUser(user);    
  }

}
