import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location, NgLocalization } from '@angular/common';

import { AccountService } from '../../../services/account.service';
import { Actor } from './../../../models/Actor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  actor: Actor;

  constructor( 
    private router: Router,
    private location: NgLocalization,
    private accountService: AccountService) { 
      this.actor = this.accountService.actorValue;
      this.isLogged = this.accountService.isLogged;
      this.isLogged = true; /* TODO DGorges remover */
  }

  ngOnInit(): void {
  }

  backClicked() {
    /* this.location.back(); */
  }

  logout() {
    this.accountService.logout();
  }

  createActor(){
    this.router.navigateByUrl('/create/actor');
  }
  
  createProduct(){
    this.router.navigateByUrl('/create/product');
  }
  
  buy(){
    this.router.navigateByUrl('/trans/buy');
  }
  
  sell(){
    this.router.navigateByUrl('/trans/sell');
  }
  
  return(){
    this.router.navigateByUrl('/trans/return');
  }
  
  lost(){
    this.router.navigateByUrl('/trans/lost');
  }
  
  adjustment(){
    this.router.navigateByUrl('/trans/adjustment');
  }
  
  storageReport(){
    this.router.navigateByUrl('/report/storage');
    
  }
  
  purchasesReport(){
    this.router.navigateByUrl('/report/purchases');
    
  }
  
  salesReport(){
    this.router.navigateByUrl('/report/sales');
    
  }
  

}
