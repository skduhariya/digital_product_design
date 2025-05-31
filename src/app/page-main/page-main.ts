import { Component, OnInit } from '@angular/core';
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

  constructor(private featuresService: Features) {
    console.log('PageMain component initialized', this.featuresService);
    
  }
  ngOnInit(): void {
    this.featuresService.getDummyData().subscribe(
      (data: any) => {
        this.features = data;
        console.log('Fetched features:', this.features);
      },
      (error: any) => {
        console.error('Error fetching features:', error);
      }
    );
  }
}
