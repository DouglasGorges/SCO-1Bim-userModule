import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';
import { first } from 'rxjs/operators';

import { AccountService } from '../../../services/account.service';
import { Actor } from './../../../models/Actor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  loading = false;
  submitted = false;
  actor: Actor;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private alerts: AlertsService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  // getter para acesso facil aos campos do form
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    
    if (this.form.invalid) {
        return;
    }
    
    this.loading = true;
    this.accountService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.loading = false;
                this.router.navigateByUrl('');
            },
            error: error => {
                this.alerts.setMessage("Usuário não encontrado. Retente.", 'error');
                //this.alerts.setMessage(error, 'error');// TODO A mensagem do erro já chega nesse parametro. Coletar ela para aparecer na mensagem em tela
                this.loading = false;
            }
        });
    }

}

