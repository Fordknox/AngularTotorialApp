import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.service';
import { CustomCurrencyModule } from '../../custom-currency.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Initialize with an empty array

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get resolved data from the route
    this.products = this.route.snapshot.data['products'];
  }
}
