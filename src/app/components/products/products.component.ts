import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public productsTable: any[] = [];

  constructor(private pService : ProductsService) {}

  ngOnInit(): void {
    this.productsTable = this.pService.products;
  }

  addProduct() {
    this.pService.products.push(
      {id: 4, name: "kabab", price: 500, quantity: 1, total: 500},
    );
  }

  changePizzaName () {
    this.pService.products[0].name = "Pizza with Mashroum";
  }
}
