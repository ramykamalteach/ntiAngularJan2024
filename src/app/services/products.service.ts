import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public products = [
    {id: 1, name: "pizza", price: 100, quantity: 3, total: 300},
    {id: 2, name: "meat", price: 400, quantity: 2, total: 800},
    {id: 3, name: "fish", price: 200, quantity: 5, total: 1000},
  ];
}
