import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule, CurrencyPipe, NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  product = input.required<Product>();

  isOutOfStock = () => this.product().inStock === 0;
}
