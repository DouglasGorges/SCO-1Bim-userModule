import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TransactionItens } from 'src/app/models/TransactionItens';

@Component({
  selector: 'app-trans-dialog-new-item',
  templateUrl: './trans-dialog-new-item.component.html',
  styleUrls: ['./trans-dialog-new-item.component.css']
})
export class TransDialogNewItemComponent {

  constructor(
    public dialogRef: MatDialogRef<TransDialogNewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TransactionItens) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
