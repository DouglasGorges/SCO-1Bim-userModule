import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';
import { MatSelectChange } from '@angular/material/select';

import { Actor } from '../../../models/Actor';
import { City } from '../../../models/City';

import { ActorService } from '../../../services/actor.service';
import { AccountService } from '../../../services/account.service';

interface PersonType {
  value: string;
  viewValue: string;
}

interface EmployeeType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  loading = false;
  submitted = false;
  form: FormGroup;

  personTypesList: PersonType[] = [
    {value: 'supplier', viewValue: 'Fornecedor'},
    {value: 'manufacturer', viewValue: 'Fabricante'},
    {value: 'client', viewValue: 'Cliente'},
    {value: 'employee', viewValue: 'Empregado'}
  ];

  employeeTypesList: EmployeeType[] = [
    {value: 'manager', viewValue: 'Gerente'},
    {value: 'technician', viewValue: 'Técnico'},
    {value: 'intern', viewValue: 'Estagiário'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private router: Router,
    private alerts: AlertsService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      personType: ['', Validators.required],
      employeeType: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // getter para acesso facil aos campos do form
  get f() { return this.form.controls; }

  newActor: Actor ={
    name: "",
    oin: "",
    phone: "",
    address: "",
    zipCode: "",
    city: new City,
    personType: "",
    employeeType: "",
    email: "",
    password: "",
    createdBy: new Actor,
    inactivatedBy: new Actor,
    inactivatedAt: new Date,
    permissions: []
  }

  onSubmit() {
    this.loading = true;
    
    /*
    if (this.form.invalid) {
      this.loading = false;
      return;
    }*/
    
    this.carregarEntidadeUsuario();

    this.actorService.create(this.newActor).subscribe((actorCreated: Actor) => {
      this.alerts.setMessage('Usuário cadastrado com sucesso!','success');
      this.redirect();
    });
  }

  carregarEntidadeUsuario(){
    this.newActor.name = this.f.name.value;
    this.newActor.oin = this.f.document.value;
    this.newActor.phone = this.f.phone.value;
    this.newActor.address = this.f.address.value;
    this.newActor.zipCode = this.f.zipCode.value;
    //this.newActor.city = this.f.city.value;
    this.newActor.city = new City;
    this.newActor.email = this.f.email.value;
    this.newActor.password = this.f.password.value;
  }

  async redirect(){
    await this.delay(2000)
    this.router.navigate(['/']);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  selectedPersonType(event: MatSelectChange) {
    this.newActor.personType = event.value;
    if(this.newActor.personType != 'employee')
      this.newActor.employeeType = '';
  }

  selectedEmployeeType(event: MatSelectChange) {
    this.newActor.employeeType = event.value;
  }
}
