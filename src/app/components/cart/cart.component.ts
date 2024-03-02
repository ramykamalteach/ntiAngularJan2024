import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    ItemComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public products = [
    {id: 1, name: "pizza", price: 100, quantity: 3, total: 300},
    {id: 2, name: "meat", price: 400, quantity: 2, total: 800},
    {id: 3, name: "fish", price: 200, quantity: 5, total: 1000},
  ];

}
