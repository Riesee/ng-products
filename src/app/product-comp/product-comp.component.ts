import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-comp',
  standalone: true,
  imports: [HttpClientModule, MatButtonModule],
  templateUrl: './product-comp.component.html',
  styleUrl: './product-comp.component.scss'
})
export class ProductCompComponent {
  products: ProductModel[] | any = [];

  constructor(private _http: HttpClient, public dialog: MatDialog){
    this._http.get("https://fakestoreapi.com/products").subscribe(response=>{
      this.products = response;
      console.log(this.products);
    })
  }

  openDialog(product: ProductModel){
    this.dialog.open(DetailProductComponent, {
    data: product,
    autoFocus: false,
    disableClose: false,
    panelClass: "testClass"
  });
}



}



export interface ProductModel{
  id:number;
  title:string;
  price:string;
  category:string;
  description:string;
  image:string;
}

