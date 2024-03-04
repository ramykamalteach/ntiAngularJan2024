import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    public productsData : any;
    public isLoading : boolean = true;

    constructor(private productService : ProductsService) {}

    ngOnInit(): void {
        this.productService.getAllProducts().subscribe({
            next : (recievedData) => {
                this.productsData = recievedData;
            },

            error : (error) => {},
            complete : () => {
                this.isLoading = false;
            },
        });
      
    }
}
