import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  ageShowed=0;


  constructor() { }

  ngOnInit(): void {
  }

  showAge() {
    if (this.ageShowed == 0)
    this.ageShowed = 1;
    else
    this.ageShowed = 0;
  }

}
