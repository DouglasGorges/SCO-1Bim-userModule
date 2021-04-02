import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';

import { User } from './../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  loading = false;
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
  }

  newUser: User ={
    firstname: "",
    lastname: "",
    document: "",
    email: "",
    password: "",
    idActive: true,
    token: ""
  }

  onSubmit() {
    this.userService.create(this.newUser).subscribe((userCreated: User) => {
      this.alerts.setMessage('Usuário cadastrado com sucesso!','success');
      this.redirect();
    });
  }

  async redirect(){
    await this.delay(2000)
    this.router.navigate(['list/student']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}