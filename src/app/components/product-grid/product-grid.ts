import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGrid {
  products = input.required<Product[]>();
}
