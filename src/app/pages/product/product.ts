import { Component, effect, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { ProductGrid } from '../../components/product-grid/product-grid';
import { ProductService } from '../../core/services/product.service';
import { signal } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ProductGrid, MatSelectModule, MatFormFieldModule, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);
  selectedCategory = signal<string | null>(null);

  categories = computed(() => {
    const uniqueCategories = Array.from(new Set(this.products().map((p) => p.category)));
    return uniqueCategories.sort();
  });

  filteredProducts = computed(() => {
    const selected = this.selectedCategory();
    if (!selected) {
      return this.products();
    }
    return this.products().filter((p) => p.category === selected);
  });

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load products. Please try again later.');
        this.isLoading.set(false);
        console.error('Error loading products:', err);
      },
    });
  }

  onCategoryChange(category: string | null): void {
    this.selectedCategory.set(category);
  }
}
