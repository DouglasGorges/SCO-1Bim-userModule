import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location, NgLocalization } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private router: Router,
    private location: NgLocalization) { 
  }

  ngOnInit(): void {
  }

  backClicked() {
    /* this.location.back(); */
  }

  logout() {
  /* this.accountService.logout(); */
  }

}
