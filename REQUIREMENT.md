# Coding Challenge: Product Catalogue

## Objective

Evaluate **component design**, **Material customization**, and **performance awareness**.

## Scenario

Build a 'Product Catalogue' page.

## Requirements

### 1. Framework & Architecture

- Use **Angular (v16+)** with **standalone components**.
- Implement `ChangeDetectionStrategy.OnPush` for optimized performance.

### 2. UI Components (Angular Material)

- Display products using **Material Card** (`mat-card`) and **Grid List** (`mat-grid-list`).
- Implement a category filter using **Material Select** (`mat-select`).

### 3. Data Representation

Each product card must display:

- Name
- Price
- Category
- **In-Stock badge**

### 4. Styling & Customization

- Customize Material cards using **SCSS**.
- Include **hover effects**, specific **spacing**, and refined **typography**.

### 5. Services

- Create a **Mock Data Service** with asynchronous loading (using RxJS `of` with `delay` or similar).

## Bonus Features (Optional)

- **Skeleton loaders:** To improve UX during data fetching.
- **Responsive layout:** Enhancements for mobile and tablet views.

## Evaluation Criteria

- **Performance awareness:** Proper use of Change Detection and async patterns.
- **Component composition:** Clean, reusable, and logical structure.
- **Styling quality:** Professional UI and effective use of SCSS.
- **Material customization:** Ability to override and extend Angular Material styles.
