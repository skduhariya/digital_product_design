import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Features {
  private dataUrl = environment.dummyDataUrl;

  constructor(private http: HttpClient) {}

  getDummyData(): Observable<any> {
    console.log('Fetching dummy data from:', this.dataUrl);

    return this.http.get<any>(this.dataUrl).pipe(
      tap((data) => console.log('✅ Dummy data fetched:', data)),
      catchError((error) => {
        console.error('❌ Failed to load dummy data:', error.message || error);
        return throwError(() => error);
      })
    );
  }
}
