import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { MOCK_PRODUCTS } from '../models/mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of(MOCK_PRODUCTS).pipe(delay(1500));
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    return of(product).pipe(delay(1500));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const products = MOCK_PRODUCTS.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase()),
    );
    return of(products).pipe(delay(1500));
  }
}
