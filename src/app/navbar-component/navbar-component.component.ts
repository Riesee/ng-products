import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.scss'
})
export class NavbarComponentComponent implements OnInit {
  categories: string[] | any = [];

  constructor(private _http:HttpClient){}

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this._http.get("https://fakestoreapi.com/products/categories").subscribe(response=> {
      this.categories = response;
    })
  }


  getCategory(category:string):string{
    console.log()
    if(category === "electronics") return "Elektronik";
    else if (category === "jewelery") return "Mücevher";
    else if (category === "men's clothing") return "Erkek Kıyafet";
    else if (category === "women's clothing") return "Kadın Kıyafet";
    else return "";
  }

}

export interface categories{
  category:string;
}



