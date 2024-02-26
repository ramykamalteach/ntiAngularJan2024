import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  public shopName:string = "Rosa Shop for Perfumes";
  public categories:string[] = ["natural", "western", "famous"];
  public categories1:string[] = [];

  public products:any = {
    productName : "Perfume 2024",
    price : 2500,
    quantity : 1000,
    shipping : true
  }

  public perfumeSelected:string = "mix";

  fx() {

  }
}
