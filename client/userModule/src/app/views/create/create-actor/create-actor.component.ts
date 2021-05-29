import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertsService } from 'angular-alert-module';
import { MatSelectChange } from '@angular/material/select';

import { Actor } from '../../../models/Actor';
import { City } from '../../../models/City';
import { State } from '../../../models/State';

import { ActorService } from '../../../services/actor.service';
import { AccountService } from '../../../services/account.service';
import { StateService } from '../../../services/state.service';
import { CityService } from '../../../services/city.service';

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
  states: State[] = [];
  cities: City[] = [];

  personTypesList: PersonType[] = [
    {value: 'establishment', viewValue: 'Estabelecimento'},
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
    private accountService: AccountService,
    private stateService: StateService,
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      personType: ['', Validators.required],
      employeeType: [''],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    
    this.stateService.listStates().subscribe((list) => {
      this.states = list;
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
    city_id: 0,
    personType: "",
    employeeType: "",
    email: "",
    password: "",
    createdBy: 0,
    inactivatedBy: new Actor,
    inactivated_at: new Date,
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
      this.alerts.setMessage(actorCreated.name + ' cadastrado com sucesso!','success');
      this.redirect();
    });
  }

  carregarEntidadeUsuario(){
    this.newActor.name = this.f.name.value;
    this.newActor.oin = this.f.document.value;
    this.newActor.phone = this.f.phone.value;
    this.newActor.address = this.f.address.value;
    this.newActor.zipCode = this.f.zipCode.value;
    this.newActor.email = this.f.email.value;
    this.newActor.password = this.f.password.value;

    this.newActor.createdBy = (typeof this.accountService.actorValue.id !== 'undefined') ? this.accountService.actorValue.id : 0
  }

  async redirect(){
    await this.delay(2000)
    location.reload();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  selectedPersonType(event: MatSelectChange) {
    this.newActor.personType = event.value;
    if(this.newActor.personType != 'employee')
      this.newActor.employeeType = '';
      this.newActor.password = '';
  }
  
  selectedEmployeeType(event: MatSelectChange) {
    this.newActor.employeeType = event.value;
  }
  
  selectedState(event: MatSelectChange) {
    this.cityService.listCities(event.value).subscribe((list) => {
      this.cities = list;
    });
  }
  
  selectedCity(event: MatSelectChange) {
    this.newActor.city_id = event.value.id;
  }
}
