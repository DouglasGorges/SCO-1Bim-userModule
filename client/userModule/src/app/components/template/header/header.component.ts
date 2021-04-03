import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location, NgLocalization } from '@angular/common';

import { AccountService } from '../../../services/account.service';
import { User } from './../../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  user: User;

  constructor( 
    private router: Router,
    private location: NgLocalization,
    private accountService: AccountService) { 
      this.user = this.accountService.userValue;
      this.isLogged = this.accountService.isLogged;
      this.isLogged = true;
  }

  ngOnInit(): void {
  }

  backClicked() {
    /* this.location.back(); */
  }

  logout() {
    this.accountService.logout();
  }

}
