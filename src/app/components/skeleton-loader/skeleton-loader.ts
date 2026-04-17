import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skeleton-loader',
  imports: [MatCardModule],
  templateUrl: './skeleton-loader.html',
  styleUrl: './skeleton-loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonLoader {}
