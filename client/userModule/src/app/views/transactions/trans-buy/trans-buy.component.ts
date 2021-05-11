import { AfterViewInit, ViewChild, Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';
import { MatSelectChange } from '@angular/material/select';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actor } from '../../../models/Actor';
import { Measure } from '../../../models/Measure';
import { TransDialogNewItemComponent } from '../dialogs/trans-dialog-new-item/trans-dialog-new-item.component';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionItens } from 'src/app/models/TransactionItens';

import { ActorService } from '../../../services/actor.service';
import { TransactionService } from '../../../services/transaction.service';
import { AccountService } from '../../../services/account.service';
import { TransactionItemService } from '../../../services/transaction-item.service';
import { Lot } from 'src/app/models/Lot';

@Component({
  selector: 'app-trans-buy',
  templateUrl: './trans-buy.component.html',
  styleUrls: ['./trans-buy.component.css']
})

export class TransBuyComponent implements AfterViewInit {
    
  loading = false;
  submitted = false;
  form: FormGroup;
  establishments: Actor[];
  suppliers: Actor[];
  trans_itens: TransactionItens[] = [];

  displayedColumns: string[] = ['position', 'name', 'quantity', 'symbol', 'unitValue', 'itemValue'];

  dataSource: MatTableDataSource<TransactionItens> = 
    new MatTableDataSource<TransactionItens>(
    this.trans_itens
  );

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private formBuilder: FormBuilder,
    private actorService: ActorService,
    private transactionService: TransactionService,
    private transactionItemService: TransactionItemService,
    private accountService: AccountService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private router: Router,
    private alerts: AlertsService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      establishmentIn: ['', Validators.required],
      establishmentOut: ['', Validators.required],
      transactionType: ['', Validators.required],
      employee: ['', Validators.required],
      documentType: ['', Validators.required],
      document: ['', Validators.required],
      date: ['', Validators.required],
      totalPrice: ['', Validators.required]
    });

    /*
    this.actorService.listActorsbyType('establishment').subscribe((lista) => {
      this.establishments = lista;
    });
    this.actorService.listActorsbyType('supplier').subscribe((lista) => {
      this.suppliers = lista;
    });
    */

   this.establishments = this.actorService.listActorsbyType('establishment');
   this.suppliers = this.actorService.listActorsbyType('supplier');
  }

    // getter para acesso facil aos campos do form
    get f() { return this.form.controls; }

    newTransaction: Transaction ={
      establishmentIn: new Actor,
      establishmentOut: new Actor,
      transactionType: "",
      employee: new Actor,
      documentType: "",
      document: "",
      date: new Date,
      totalPrice: 0
    }
  
    onSubmit() {
      this.loading = true;
  
      console.log(this.form.invalid)
      if (this.form.invalid) {
        this.loading = false;
        return;
      }
  
      this.carregarTransactionEntity();

      let transItemToPersist: TransactionItens[] = [];
  
      this.transactionService.create(this.newTransaction).subscribe((transCreated: Transaction) => {

        this.trans_itens.forEach(function (item) {
          item.transaction = transCreated;
          transItemToPersist.push(item);
        });
        this.alerts.setMessage('Compra registrada com sucesso!','success');
      });
      
      this.transactionItemService.create(transItemToPersist).subscribe((transItemCreated: TransactionItens) => {
        this.alerts.setMessage('Itens da compra registrados com sucesso!','success');
        this.redirect();
      });
    }
  
    carregarTransactionEntity(){
      this.newTransaction.transactionType = 'purchase';
      this.newTransaction.employee = this.accountService.actorValue;
      this.newTransaction.documentType = 'envoice';
      this.newTransaction.document = '<xml>Essa é a nota fiscal</xml>';
    }
  
    async redirect(){
      await this.delay(2000)
      this.router.navigate(['/trans/buy']);
    }
  
    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }

    selectedEstablishment(event: MatSelectChange) {
      this.newTransaction.establishmentIn = event.value;
    }

    selectedSupplier(event: MatSelectChange) {
      this.newTransaction.establishmentOut = event.value;
    }

    openNewItem(): void {
      const dialogRef = this.dialog.open(TransDialogNewItemComponent, {
        width: '700px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        
        let lot = new Lot;
        lot.expiryDate = result.expiryDate;
        lot.quantityBalance = result.quantity;
        lot.product = result.product;
        
        let trans_item = new TransactionItens;
        trans_item.lot = lot;
        trans_item.unitPrice = result.price;
        trans_item.quantity = lot.quantityBalance;
        trans_item.subtotalPrice = (trans_item.unitPrice * trans_item.quantity);

        this.trans_itens.push(trans_item);
      });
    }

}
