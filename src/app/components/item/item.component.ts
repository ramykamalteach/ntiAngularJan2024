import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() public oneProduct = {id: 0, name: "", price: 0, quantity: 0, total: 0};

  handleQuantityChange (){
    this.oneProduct.total = this.oneProduct.price * this.oneProduct.quantity;
  }
  
}
