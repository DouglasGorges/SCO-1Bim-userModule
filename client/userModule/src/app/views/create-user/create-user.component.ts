import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';

import { User } from './../../models/User';
import { UserService } from '../../services/user.service';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  loading = false;
  submitted = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService,
    private accountService: AccountService,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // getter para acesso facil aos campos do form
  get f() { return this.form.controls; }

  newUser: User ={
    firstName: "",
    lastName: "",
    document: "",
    email: "",
    password: "",
    idActive: true,
    token: "",
    permissions: []
  }

  onSubmit() {
    this.loading = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    this.userService.create(this.newUser).subscribe((userCreated: User) => {
      this.alerts.setMessage('Usuário cadastrado com sucesso!','success');
    });
    
    this.accountService.login(this.f.email.value, this.f.password.value)
    this.redirect();
  }

  async redirect(){
    await this.delay(2000)
    this.router.navigate(['/']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}