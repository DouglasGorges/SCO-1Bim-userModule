import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AlertsModule } from 'angular-alert-module';
import { MatBreadcrumbModule } from "mat-breadcrumb";

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CreateActorComponent } from './views/create/create-actor/create-actor.component';
import { CreateProductComponent } from './views/create/create-product/create-product.component';
import { TransBuyComponent } from './views/transactions/trans-buy/trans-buy.component';
import { TransSellComponent } from './views/transactions/trans-sell/trans-sell.component';
import { StorageReportComponent } from './views/reports/storage-report/storage-report.component';
import { PurchasesReportComponent } from './views/reports/purchases-report/purchases-report.component';
import { SalesReportComponent } from './views/reports/sales-report/sales-report.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

//Módulos do Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSnackBarModule } from "@angular/material/snack-bar";

//Importar bibliotecas de localição e registrar o idioma
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { LoginComponent } from './components/template/login/login.component';
import { NavComponent } from './components/template/nav/nav.component';
registerLocaleData(localePt);

import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    CreateActorComponent,
    CreateProductComponent,
    TransBuyComponent,
    TransSellComponent,
    StorageReportComponent,
    PurchasesReportComponent,
    SalesReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSnackBarModule,
    AlertsModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    MatBreadcrumbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
