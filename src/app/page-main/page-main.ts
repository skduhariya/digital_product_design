import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Features } from '../services/features';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-main',
  imports: [CommonModule],
  templateUrl: './page-main.html',
  styleUrl: './page-main.scss',
})
export class PageMain implements OnInit {
  features: any[] = [];

  constructor(private featuresService: Features, private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.featuresService.getDummyData().subscribe({
      next: (data: any) => {
        this.features = data;
        console.log('Fetched features:', this.features);
        this.cdRef.detectChanges();
      },
      error: (error: any) => {
        console.error('Error fetching features:', error);
      }
    });
  }
}
