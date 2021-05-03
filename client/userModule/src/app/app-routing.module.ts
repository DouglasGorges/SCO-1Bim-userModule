import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CreateActorComponent } from './views/create/create-actor/create-actor.component';
import { CreateProductComponent } from './views/create/create-product/create-product.component';
import { TransBuyComponent } from './views/transactions/trans-buy/trans-buy.component';
import { TransSellComponent } from './views/transactions/trans-sell/trans-sell.component';
import { StorageReportComponent } from './views/reports/storage-report/storage-report.component';
import { PurchasesReportComponent } from './views/reports/purchases-report/purchases-report.component';
import { SalesReportComponent } from './views/reports/sales-report/sales-report.component';

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
    path: 'create/actor', 
    component: CreateActorComponent,
    data: {
      title: 'page2', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Cadastro',
          url: ''
        },
        {
          label: 'Usuário',
          url: 'create/actor'
        }
      ]
    }
  },
  {
    path: 'create/product', 
    component: CreateProductComponent,
    data: {
      title: 'page3', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Cadastro',
          url: ''
        },
        {
          label: 'Produto',
          url: 'create/product'
        }
      ]
    }
  },
  {
    path: 'trans/buy', 
    component: TransBuyComponent,
    data: {
      title: 'page4', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Transações',
          url: ''
        },
        {
          label: 'Comprar',
          url: 'trans/buy'
        }
      ]
    }
  },
  {
    path: 'trans/sell', 
    component: TransSellComponent,
    data: {
      title: 'page4', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Transações',
          url: ''
        },
        {
          label: 'Vender',
          url: 'trans/sell'
        }
      ]
    }
  },
  {
    path: 'report/storage', 
    component: StorageReportComponent,
    data: {
      title: 'page6', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Relatórios',
          url: ''
        },
        {
          label: 'Estoque',
          url: 'report/storage'
        }
      ]
    }
  },
  {
    path: 'report/purchases', 
    component: PurchasesReportComponent,
    data: {
      title: 'page6', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Relatórios',
          url: ''
        },
        {
          label: 'Compras',
          url: 'report/purchases'
        }
      ]
    }
  },{
    path: 'report/sales', 
    component: SalesReportComponent,
    data: {
      title: 'page6', 
      breadcrumb: [
        {
          label: 'Início',
          url: '/'
        },
        {
          label: 'Relatórios',
          url: ''
        },
        {
          label: 'Vendas',
          url: 'report/sales'
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
