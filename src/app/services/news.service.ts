import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // Use dynamic detection of environment
  private API_URL = this.isProduction()
    ? '/api/news'
    : 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b8504bb386304c0b8cc1161f3a8cc2d8';

  constructor(private http: HttpClient) {}

  // Detect if the environment is production
  private isProduction(): boolean {
    return window.location.hostname !== 'localhost';
  }

  getNews(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
