import { Component, signal } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-dtails',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-dtails.component.html',
  styleUrl: './product-dtails.component.css'
})
export class ProductDtailsComponent {

    public productDetails : any;
    dataSignal = signal<any>(null);

    public productId : any = '';

    constructor(private http : HttpClient, private route : ActivatedRoute) {}

    ngOnInit(): void {
        this.productId = this.route.snapshot.paramMap.get('id');
        this.fetchData();
    }
    fetchData () {
        this.http.get<any>("https://fakestoreapi.com/products/" + this.productId).subscribe(response => {
            this.dataSignal.set(response);    // await
            this.productDetails = response;
        });
    }
}
