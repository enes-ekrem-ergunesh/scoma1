import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  acc_name!: string;
  acc_address!: string;

  //save the account information
  save() {
    console.log(this.acc_name);
    console.log(this.acc_address);
  }


}
