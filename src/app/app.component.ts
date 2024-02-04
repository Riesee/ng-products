import { Component } from '@angular/core';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { ProductCompComponent } from "./product-comp/product-comp.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [NavbarComponentComponent, ProductCompComponent]
})
export class AppComponent {
  title = 'ng-products';

}





