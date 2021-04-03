import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './views/create-user/create-user.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    data: {
      title: 'Início',
      breadcrumb: [
        {
          label: 'Início',
          url: ''
        }
      ]
    }
  },
  {
    path: 'create/user', 
    component: CreateUserComponent,
    data: {
      title: 'page2', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Cadastro',
          url: 'create/user'
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
