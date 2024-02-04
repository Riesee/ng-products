import {Component, Inject} from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ProductModel } from '../app.component';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})


export class DetailProductComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: ProductModel, public dialogRef: MatDialogRef<DetailProductComponent>) {}


  close(){
    this.dialogRef.close();
  }
}